# 🔌 Senior Living Trust Score - API Integration Guide

Complete list of APIs needed for the proprietary Community Trust Score system.

---

## 📋 Summary Table

| API | Purpose | Type | Free Tier | Auth | Priority |
|-----|---------|------|-----------|------|----------|
| **Google Places API** | Aggregate Google reviews | REST | $200/mo credit | API Key | ⭐⭐⭐⭐⭐ |
| **Reddit API** | Scrape Reddit mentions | REST | Yes | OAuth 2.0 | ⭐⭐⭐⭐ |
| **CMS Data API** | State inspection data | REST | Yes | None | ⭐⭐⭐⭐ |
| **Yelp Fusion API** | Yelp reviews & ratings | REST | No | API Key | ⭐⭐⭐⭐ |
| **OpenAI API** | Sentiment analysis on reviews | REST | $5 credit | API Key | ⭐⭐⭐ |
| **Stripe API** | Payment processing | REST | Test mode | API Key | ⭐⭐⭐ |
| **SendGrid API** | Email notifications | REST | 100/day free | API Key | ⭐⭐⭐ |
| **Sentry API** | Error logging | REST | Free tier | API Key | ⭐⭐ |
| **Mapbox API** | Geolocation & mapping | REST | Free tier | API Key | ⭐⭐ |
| **Census Bureau API** | Demographics data | REST | Yes | API Key | ⭐ |

---

## 🌟 CORE APIs (MUST HAVE)

### 1. **Google Places API** ⭐⭐⭐⭐⭐
**Purpose:** Aggregate Google reviews (20% weight in Trust Score)

**Endpoint:**
```
GET https://maps.googleapis.com/maps/api/place/details/json
```

**Setup:**
```bash
1. Go to: https://cloud.google.com/console
2. Enable: "Places API"
3. Create API Key (Restricted)
4. Add to env: GOOGLE_PLACES_API_KEY
```

**Cost:**
- First 1000 requests/month: FREE
- Then: ~$0.035 per request (Details), ~$0.065 per review
- Estimate: $100-300/month for 10 facilities

**Node.js Implementation:**
```typescript
// .env
GOOGLE_PLACES_API_KEY=your_key_here

// src/services/google-places.ts
import axios from 'axios'

export async function getGoogleReviews(placeId: string) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json`,
    {
      params: {
        place_id: placeId,
        fields: 'rating,reviews,user_ratings_total,formatted_address',
        key: process.env.GOOGLE_PLACES_API_KEY
      }
    }
  )

  return {
    rating: response.data.result.rating,
    totalRatings: response.data.result.user_ratings_total,
    reviews: response.data.result.reviews,
    address: response.data.result.formatted_address
  }
}
```

**Install:**
```bash
npm install @googlemaps/js-client-library axios
```

---

### 2. **Reddit API** ⭐⭐⭐⭐
**Purpose:** Scrape Reddit mentions for sentiment analysis (15% weight)

**Setup:**
```bash
1. Go to: https://www.reddit.com/prefs/apps
2. Create "script" app
3. Get: Client ID, Client Secret
4. Add to env: REDDIT_CLIENT_ID, REDDIT_SECRET
```

**Cost:** FREE (rate limited to 60 requests/minute)

**Node.js Implementation:**
```typescript
// .env
REDDIT_CLIENT_ID=your_client_id
REDDIT_CLIENT_SECRET=your_secret
REDDIT_USER_AGENT=SeniorLivingTrustScore/1.0 (by your_reddit_username)

// src/services/reddit.ts
import Snoowrap from 'snoowrap'

export async function getRedditMentions(facilityName: string) {
  const reddit = new Snoowrap({
    userAgent: process.env.REDDIT_USER_AGENT,
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    clientRedirectUri: 'http://localhost',
    refreshToken: process.env.REDDIT_REFRESH_TOKEN
  })

  // Search multiple healthcare subreddits
  const subreddits = ['SeniorCare', 'nursing', 'healthcare', 'CaregiverSupport']
  let allMentions = []

  for (const subreddit of subreddits) {
    try {
      const posts = await reddit
        .getSubreddit(subreddit)
        .search({
          query: facilityName,
          time: 'year',
          limit: 50
        })

      allMentions = allMentions.concat(posts)
    } catch (e) {
      console.error(`Error searching r/${subreddit}:`, e)
    }
  }

  return {
    totalMentions: allMentions.length,
    posts: allMentions.map(post => ({
      title: post.title,
      body: post.selftext,
      score: post.score,
      created: new Date(post.created_utc * 1000),
      url: post.url
    }))
  }
}
```

**Install:**
```bash
npm install snoowrap
```

---

### 3. **CMS (Centers for Medicare & Medicaid Services) API** ⭐⭐⭐⭐
**Purpose:** Get official inspection data & deficiencies (15% weight)

**Endpoint:**
```
GET https://data.cms.gov/api/views/...
```

**Setup:**
```bash
1. No auth needed - public government data
2. Go to: https://data.cms.gov/provider-data/
3. Find nursing home dataset
4. Use their SODA API
```

**Cost:** FREE (no rate limit concerns)

**Node.js Implementation:**
```typescript
// src/services/cms-data.ts
import axios from 'axios'

export async function getCMSInspectionData(facilityName: string, state: string) {
  // CMS Nursing Home Deficiencies Dataset
  const response = await axios.get(
    'https://data.cms.gov/api/views/r5kz-efzm/rows.json',
    {
      params: {
        $where: `LOWER(provider_name) like '%${facilityName.toLowerCase()}%' AND state = '${state}'`,
        $limit: 10
      }
    }
  )

  if (!response.data || response.data.length === 0) {
    return null
  }

  const facility = response.data[0]

  return {
    facilityName: facility[8],
    state: facility[4],
    totalDeficiencies: facility[12],
    standardDeficiencies: facility[13],
    harmDeficiencies: facility[14],
    lastInspection: facility[15],
    deficiencyScore: calculateDeficiencyScore(facility[12], facility[13])
  }
}

function calculateDeficiencyScore(total: number, harmful: number): number {
  // Industry avg: ~7 deficiencies. More = worse score
  const score = Math.max(0, 100 - (total * 3 + harmful * 10))
  return Math.min(100, Math.max(0, score))
}
```

**Documentation:**
- https://data.cms.gov/provider-data/
- Search: "Nursing Home Deficiencies"

---

### 4. **Yelp Fusion API** ⭐⭐⭐⭐
**Purpose:** Aggregate Yelp reviews (alternative/supplemental to Google)

**Setup:**
```bash
1. Go to: https://www.yelp.com/developers/v3/manage_app
2. Create app
3. Get API Key
4. Add to env: YELP_API_KEY
```

**Cost:**
- FREE tier: 5,000 calls/month (enough for most)
- Paid: $0.001 per call after that

**Node.js Implementation:**
```typescript
// .env
YELP_API_KEY=your_yelp_api_key

// src/services/yelp.ts
import axios from 'axios'

export async function getYelpReviews(businessId: string) {
  const response = await axios.get(
    `https://api.yelp.com/v3/businesses/${businessId}/reviews`,
    {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
      }
    }
  )

  return {
    reviews: response.data.reviews,
    totalCount: response.data.total,
    rating: response.data.reviews.reduce((sum, r) => sum + r.rating, 0) / 
            response.data.reviews.length
  }
}
```

**Install:**
```bash
npm install axios
```

---

## 🤖 AI & SENTIMENT ANALYSIS

### 5. **OpenAI API** ⭐⭐⭐
**Purpose:** Sentiment analysis on reviews (optional but powerful)

**Setup:**
```bash
1. Go to: https://platform.openai.com/api-keys
2. Create API Key
3. Add to env: OPENAI_API_KEY
```

**Cost:**
- $5 free credit (usually expires in 3 months)
- ~$0.001 per 1k tokens after that
- Estimate: $5-20/month for 100 facilities

**Node.js Implementation:**
```typescript
// .env
OPENAI_API_KEY=your_key_here

// src/services/sentiment-analysis.ts
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function analyzeSentiment(reviewText: string): Promise<{
  sentiment: 'positive' | 'neutral' | 'negative'
  score: number // 0-100
  topics: string[]
}> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-mini', // Cheapest option
    messages: [
      {
        role: 'system',
        content: `You are a sentiment analyzer for senior living facility reviews. 
        Return JSON with: { sentiment: "positive|neutral|negative", score: 0-100, topics: [] }`
      },
      {
        role: 'user',
        content: `Analyze this review: "${reviewText}"`
      }
    ],
    temperature: 0.3
  })

  return JSON.parse(response.choices[0].message.content)
}
```

**Alternative (Free):** Use `sentiment` npm package (no API needed):
```bash
npm install sentiment

// src/services/sentiment-free.ts
import Sentiment from 'sentiment'

const sentiment = new Sentiment()

export function analyzeSentimentFree(text: string) {
  const result = sentiment.analyze(text)
  
  return {
    sentiment: result.score > 0 ? 'positive' : result.score < 0 ? 'negative' : 'neutral',
    score: ((result.score + 5) / 10) * 100, // Normalize to 0-100
    comparative: result.comparative
  }
}
```

**Install:**
```bash
npm install openai
# OR
npm install sentiment
```

---

## 💳 PAYMENTS & NOTIFICATIONS

### 6. **Stripe API** ⭐⭐⭐
**Purpose:** Subscription payments from facilities ($199-499/month)

**Setup:**
```bash
1. Go to: https://stripe.com
2. Create account
3. Get Publishable & Secret keys
4. Add to env: STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY
```

**Cost:** FREE to set up, 2.9% + $0.30 per transaction

**Node.js Implementation:**
```typescript
// .env
STRIPE_SECRET_KEY=sk_...
STRIPE_PUBLISHABLE_KEY=pk_...

// src/services/stripe.ts
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
})

export async function createSubscription(facilityId: string, planId: string) {
  const subscription = await stripe.subscriptions.create({
    customer: facilityId,
    items: [{ price: planId }],
    payment_behavior: 'default_incomplete',
    expand: ['latest_invoice.payment_intent']
  })

  return subscription
}

export async function handleWebhook(event: Stripe.Event) {
  switch (event.type) {
    case 'customer.subscription.updated':
      console.log('Subscription updated')
      break
    case 'invoice.payment_failed':
      console.log('Payment failed - send email')
      break
  }
}
```

**Install:**
```bash
npm install stripe
```

---

### 7. **SendGrid API** ⭐⭐⭐
**Purpose:** Send email notifications to facilities

**Setup:**
```bash
1. Go to: https://sendgrid.com/
2. Create account (100 emails/day free)
3. Create API Key
4. Add to env: SENDGRID_API_KEY
```

**Cost:** 
- FREE: 100 emails/day
- PAID: ~$20/month (10k emails/month)

**Node.js Implementation:**
```typescript
// .env
SENDGRID_API_KEY=your_key_here
SENDGRID_FROM_EMAIL=noreply@trustscore.io

// src/services/email.ts
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function sendNotification(
  facilityEmail: string,
  subject: string,
  content: string
) {
  const msg = {
    to: facilityEmail,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: subject,
    html: content
  }

  await sgMail.send(msg)
}

export async function sendReviewNotification(facilityId: string, reviewCount: number) {
  const facility = await prisma.facility.findUnique({ where: { id: facilityId } })
  
  await sendNotification(
    facility.email,
    `You have ${reviewCount} new reviews!`,
    `<h2>New Reviews</h2><p>Check your dashboard to moderate.</p>`
  )
}
```

**Install:**
```bash
npm install @sendgrid/mail
```

---

## 🗺️ LOCATION & MAPPING

### 8. **Mapbox API** ⭐⭐
**Purpose:** Display facilities on map, geolocation

**Setup:**
```bash
1. Go to: https://account.mapbox.com/
2. Create account
3. Get Public Token
4. Add to env: MAPBOX_PUBLIC_TOKEN
```

**Cost:** FREE tier (50k map views/month)

**Node.js Implementation:**
```typescript
// .env
MAPBOX_PUBLIC_TOKEN=pk_...

// src/services/mapbox.ts
export async function getCoordinates(address: string) {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_PUBLIC_TOKEN}`
  )
  
  const data = await response.json()
  
  if (data.features.length === 0) return null
  
  const [lng, lat] = data.features[0].geometry.coordinates
  
  return { lat, lng, address: data.features[0].place_name }
}

export async function findNearbyFacilities(lat: number, lng: number, radiusMiles: number = 10) {
  const radiusKm = radiusMiles * 1.60934
  
  const facilities = await prisma.facility.findMany({
    where: {
      // Distance query using PostGIS
      _raw: {
        where: `ST_Distance(location, ST_Point(${lng}, ${lat})) < ${radiusKm * 1000}`
      }
    }
  })
  
  return facilities
}
```

---

## 📊 ANALYTICS & MONITORING

### 9. **Sentry API** ⭐⭐
**Purpose:** Error logging and monitoring

**Setup:**
```bash
1. Go to: https://sentry.io/
2. Create account (free tier available)
3. Create project
4. Get DSN
5. Add to env: SENTRY_DSN
```

**Cost:** FREE tier (5k events/month)

**Node.js Implementation:**
```typescript
// .env
SENTRY_DSN=your_dsn_here

// src/config/sentry.ts
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0
})

// Use in API routes
export async function calculateTrustScore(facilityId: string) {
  try {
    // ... your code
  } catch (error) {
    Sentry.captureException(error)
    throw error
  }
}
```

**Install:**
```bash
npm install @sentry/node
```

---

### 10. **US Census Bureau API** ⭐
**Purpose:** Demographics data for facility area (optional)

**Setup:**
```bash
1. Go to: https://api.census.gov/data/key_signup.html
2. Request API key
3. Add to env: CENSUS_API_KEY
```

**Cost:** FREE

**Node.js Implementation:**
```typescript
// .env
CENSUS_API_KEY=your_key_here

// src/services/census.ts
export async function getDemographics(zipCode: string) {
  const response = await fetch(
    `https://api.census.gov/data/2021/acs/acs5?get=NAME,B01003_001E&for=zip_code_tabulation_area:${zipCode}&key=${process.env.CENSUS_API_KEY}`
  )
  
  const data = await response.json()
  
  return {
    population: data[1][1],
    zipCode: data[1][2]
  }
}
```

---

## 🛠️ SETUP CHECKLIST

```bash
# 1. Install all dependencies
npm install \
  @googlemaps/js-client-library \
  snoowrap \
  axios \
  openai \
  stripe \
  @sendgrid/mail \
  @sentry/node \
  dotenv

# 2. Create .env file
cat > .env << EOF
# Google
GOOGLE_PLACES_API_KEY=

# Reddit
REDDIT_CLIENT_ID=
REDDIT_CLIENT_SECRET=
REDDIT_USER_AGENT=

# Yelp
YELP_API_KEY=

# OpenAI
OPENAI_API_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=

# SendGrid
SENDGRID_API_KEY=
SENDGRID_FROM_EMAIL=

# Mapbox
MAPBOX_PUBLIC_TOKEN=

# Sentry
SENTRY_DSN=

# Census
CENSUS_API_KEY=
EOF

# 3. Add to .gitignore
echo ".env.local" >> .gitignore

# 4. Test APIs
npm run test:apis
```

---

## 📈 Estimated Monthly Costs

| Service | Free Tier | Estimated Usage | Monthly Cost |
|---------|-----------|-----------------|--------------|
| Google Places | $200 credit | 200 reviews/mo | $0-50 |
| Reddit | Unlimited | Included | $0 |
| CMS Data | Unlimited | Included | $0 |
| Yelp | 5,000 calls | 1,000 calls | $0 |
| OpenAI | $5 credit | 1000 reviews | $5-15 |
| Stripe | 2.9% + $0.30 | $5k revenue | $145 + fees |
| SendGrid | 100/day | 50/day | $0 |
| Mapbox | 50k views | 10k views | $0 |
| Sentry | 5k events | 500 events | $0 |
| **TOTAL** | | | **~$150-215/mo** |

---

## 🎯 Priority Order

1. **Week 1:** Google Places + CMS (core data)
2. **Week 2:** Reddit + Yelp (sentiment)
3. **Week 3:** OpenAI (analysis)
4. **Week 4:** Stripe + SendGrid (monetization)
5. **Week 5:** Mapbox + Sentry (nice-to-have)

---

## 📚 Resources

- Google Places Docs: https://developers.google.com/maps/documentation/places/web-service
- Reddit API: https://www.reddit.com/dev/api/
- CMS Data: https://data.cms.gov/provider-data/
- Yelp API: https://www.yelp.com/developers/documentation/v3
- OpenAI API: https://platform.openai.com/docs
- Stripe Docs: https://stripe.com/docs
- SendGrid: https://docs.sendgrid.com/
- Mapbox: https://docs.mapbox.com/

