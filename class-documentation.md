# CSS Class Naming Documentation

This document explains the "humanized" class names that have been implemented across the Bake Matters website to make it drastically easier for you to read, type, and remember the classes moving forward. 

We replaced traditional, abstract developer-terminology with direct, descriptive words that describe exactly what you are seeing.

## Global & Utility Classes
| Old Class Name | New Humanized Class | Purpose / Description |
|---|---|---|
| `.btn-primary` | `.main-button` | The primary, filled button (e.g., "Order Now") |
| `.btn-secondary` | `.bordered-button` | The secondary button that just has an outline |
| `.fade-up` | `.animate-up` | Added to any element you want to slide/fade up dynamically |
| `.delay-1` | `.delay-short` | Adds a slight delay to the animation sequence |
| `.delay-2` | `.delay-long` | Adds a longer delay to the animation sequence |
| `.badge` | `.small-badge` | The tiny text tag (like "Artisan Excellence") |

## Header & Navigation
| Old Class Name | New Humanized Class | Purpose / Description |
|---|---|---|
| `.logo` | `.site-logo` | The top-left corner logo wrapper |
| `.scrolled` | `.has-scrolled` | Applied automatically via JS when the user scrolls |

## Home Block (Previously "Hero")
| Old Class Name | New Humanized Class | Purpose / Description |
|---|---|---|
| `.hero` | `.main-container` | The giant top wrapper containing the banner image and text |
| `.hero-bg` | `.main-background` | The div holding the large image |
| `.hero-img` | `.main-image` | The actual image tag for the banner |
| `.overlay` | `.color-overlay` | The shade over the image making the text readable |
| `.hero-content` | `.main-text` | Wrapper containing the banner's text and buttons |
| `.hero-actions` | `.main-buttons` | Wrapper just for aligning the two buttons together |

## Content Sections & Cards
| Old Class Name | New Humanized Class | Purpose / Description |
|---|---|---|
| `.section` | `.content-block` | The wrapper for a new row of content |
| `.section-header` | `.block-title` | The text at the top of a section |
| `.cards` | `.grid-of-cards` | The CSS Grid that aligns the cards nicely |
| `.card` | `.info-card` | An individual card element |
| `.card-img-wrapper` | `.image-wrapper` | The boundary box that holds the card's image |
| `.card-content` | `.card-description` | The text container inside the card |
| `.arrow-link` | `.link-with-arrow` | The clickable link that has the little arrow `→` in it |

## Store Page Specific
| Old Class Name | New Humanized Class | Purpose / Description |
|---|---|---|
| `.store-header` | `.store-top-banner` | The gradient header at the top of the Store page |
| `.store-grid` | `.products-grid` | The CSS grid aligning the store items |
| `.store-item` | `.product-box` | An individual product container |
| `.store-item-img` | `.product-picture` | The picture of the individual item being sold |
| `p.price` | `p.item-price` | The price text (colored in the brand theme) |

## Footer
| Old Class Name | New Humanized Class | Purpose / Description |
|---|---|---|
| `.footer-content` | `.footer-top-section` | The container for the upper half of the footer |
| `.footer-brand` | `.footer-about` | The segment containing the company name and slogan |
| `.footer-links` | `.footer-menu` | The segment containing page links |
| `.footer-bottom` | `.footer-legal` | The very bottom strip containing copyright text |
