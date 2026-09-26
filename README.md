# רשת .uno — America.uno · Europe.uno · Africa.uno

קוד אחד משותף שבונה שלושה אתרי תוכן סטטיים (Astro), אחד לכל דומיין.
המודל העסקי: **פיתוח + מכירה**. האתרים מייצרים הכנסה משותפים (affiliate) ובהמשך פרסום,
ובמקביל הדומיינים מוצעים למכירה. דומיין עם אתר חי ותנועה נמכר בכפולות של דומיין ריק.

| אתר | שפה | תוכן ראשוני | צבע |
|---|---|---|---|
| america.uno | ספרדית | 6 יעדים, 4 מדריכים | כתום |
| europe.uno | אנגלית | 3 יעדים, 2 מדריכים | כחול |
| africa.uno | אנגלית | 3 יעדים, 2 מדריכים | ירוק |

## הרצה מקומית

```bash
npm install
SITE=america npm run dev      # פיתוח של אתר אחד (america | europe | africa)
npm run build:all             # בונה את שלושתם אל dist/<site>
npm run build:all america     # אתר אחד בלבד
```

## מבנה הפרויקט

```
src/sites.js                 הגדרות לכל דומיין: שם, שפה, צבע, מזהי שותפים
src/i18n.ts                  מחרוזות ממשק בספרדית ובאנגלית
src/content/destinations/<site>/*.md   עמודי יעד (מדינה או עיר)
src/content/guides/<site>/*.md         מדריכים רוחביים
src/pages/                   דף בית, רשימות, עמוד תוכן, about, privacy, affiliate-disclosure, 404, robots.txt
src/components/AffiliateBox  קופסת קישורי שותפים (Booking, Airalo, SafetyWing)
src/components/AdSlot        מקום לפרסומת, ריק עד שמחברים רשת פרסום
scripts/build-all.mjs        בנייה של כל האתרים
.github/workflows/build.yml  CI שבונה את שלושת האתרים בכל push
```

## הוספת תוכן

יוצרים קובץ Markdown בתיקייה של האתר. הכתובת נגזרת משם הקובץ.

```markdown
---
title: "Chile"
description: "משפט אחד לתצוגה ברשימות ובגוגל."
country: "Chile"
featured: true
budgetPerDay: "50–90 USD"
bestTime: "Octubre a abril"
currency: "Peso chileno (CLP)"
language: "Español"
visa: "Sin visado hasta 90 días"
bookingQuery: "Santiago"        # מה יחופש ב-Booking מהקופסה בצד
updated: 2026-09-26
---
גוף העמוד...
```

למדריך השדות הם `title`, `description`, `category`, `featured`, `updated`.

## הפעלת המונטיזציה (מה שנשאר לעשות ידנית)

1. **שותפים**. להירשם ולהחליף את מזהי ה-`TODO` בקובץ `src/sites.js`:
   - Booking.com Partner Programme → `booking.aid`
   - Airalo Partner (eSIM) → `airalo.ref`
   - SafetyWing Ambassador (ביטוח) → `safetywing.ref`

   עד שמחליפים, הקישורים מובילים לאתרים הרגילים בלי מזהה, אז שום דבר לא שבור.
2. **אנליטיקה**. להוסיף סקריפט של Plausible או Cloudflare Web Analytics ל-`src/layouts/Layout.astro`.
   שניהם בלי עוגיות, אז אין צורך בבאנר הסכמה.
3. **פרסום**. אחרי כ-50 עמודים ותנועה יציבה: AdSense כשלב ראשון, Ezoic או Mediavine (דורשת 50 אלף סשנים בחודש) בהמשך.
   מכניסים את סקריפט הרשת ל-Layout, והיחידות כבר ממוקמות ב-`AdSlot`.
4. **Search Console**. לאמת כל דומיין ולשלוח את `https://<domain>/sitemap-index.xml`.

## פריסה (Cloudflare Pages, חינם)

לכל דומיין יוצרים פרויקט Pages נפרד המחובר לריפו הזה:

| הגדרה | ערך |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist/america` (או europe / africa) |
| Environment variable | `SITE=america` (או europe / africa) |
| Node version | 22 |

אחר כך מחברים את הדומיין ב-Custom domains. Netlify או Vercel עובדים באותה צורה.

## רישום למכירה (במקביל, לא במקום)

- Afternic, Sedo ו-Dan: מחיר Buy Now קבוע. הצעה לפתיחה: America.uno גבוה יותר משני האחרים.
- בדף About מופיע קישור לרשת, אז קונה פוטנציאלי רואה שלושה אתרים פעילים ולא דומיין חונה.
- להוסיף שורת "This domain and site are available for acquisition" בפוטר רק אם רוצים מכירה מהירה. כרגע לא הוספתי, כדי לא לפגוע באמינות מול קוראים.

## תוכנית תוכן ל-90 הימים הראשונים

| שבועות | America.uno | Europe.uno / Africa.uno |
|---|---|---|
| 1–2 | חיבור שותפים, אנליטיקה, Search Console | אותו דבר |
| 3–6 | 2 עמודים בשבוע: Chile, Costa Rica, Ecuador, Bolivia, Uruguay, Panamá + מדריכים לערים (CDMX, Medellín, Buenos Aires) | עמוד אחד בשבוע לכל אתר |
| 7–12 | מדריכים ארוכי-זנב: "cuánto cuesta vivir en Medellín", "mejor eSIM para México", השוואות | מדריכי ויזה ו-eSIM לפי מדינה |

הכלל: כל עמוד עונה על שאלה שאנשים באמת מחפשים, עם מספרים ותאריך עדכון. בלי זה אין תנועה מגוגל, ובלי תנועה אין הכנסה ואין ערך מכירה.
