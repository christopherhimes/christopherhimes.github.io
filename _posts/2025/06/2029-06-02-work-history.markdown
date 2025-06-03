---
layout: post
title:  "Work History"
date:   2025-06-02 21:00:00
tags: ['work', 'work history', '100 Days To Offload']
blurb: I won't do this non-anniversary thing again but today would have been 17 years
comments: 
    id: 114617007320064900
---

I don't know if it is nostalgia or what but I've spent the past few weeks thinking about my previous employment. Maybe it's just a consequence of job searching while between jobs that will do that to a person. One thing it has taught me is to do a better job of making notes about what you're doing in the moment. I'm sure I've forgot something or will be tweaking this in the future.

I won't do this non-anniversary thing again but today would have been 17 years at Milliken Millwork/MMI Door/JELD-WEN. There's a lot that happened over that time and this is no way a list of it all.

## 2008
* Start June 2nd - Milliken Millwork.
* Product training and onboarding.
* Trip to Klamath, OR for training from the developers at JELD-WEN.
* Initial catalog build was for Home Depot and it was created by JELD-WEN and the marketing department.
    * Had to go to Atlanta to test the catalog at THD's headquarters. Stage environment testing took place on-site and would continue for both retailers for years.
* After returning from training work began on bug fixes via [Track-IT] and setup to support another retailer. We were already building out support for Lowe's.

## 2009
* Early in the year the Milliken retail catalog is available at both major retailers. Lowe's required breaking up the roll out by store and product category (Exterior, Interior, Patio).
* Wrote a program in Visual Studio 6.0 to monitor a folder that would periodically receive EDI orders. Orders were parsed into Excel documents for formatting purposes, they were then sent to a local printer, and both EDI and Excel files were archived. 
* Added a Tax Credit question to the catalog and all the filtering necessary to hide products that did not meet the Energy Star requirements which disqualified the items from the credit.
* Updates happened more slowly at this time and we were largely just resolving issues without adding anything major to the experience. This was a time that everything offered appeared in the printed price pages. A simpler time.
* Not sure if it 

## 2010
* Added Commercial Doors to the offering. A brand new offering to the company and the largest addition I made to the catalog to date. Since this category is heavy on hardware additional layers were added to visualization to include exit devices, closers, and kick plates.
* Built a revamped website with branding similar to the new price pages which were also launching. The site included links to brochures, the usual business site pages (About, Locations, Careers), and a combination Dealer Login and Quick Order Info Search. None of the forms work but you can [still see most of it].
* The Quick Order Info Search was probably the best thing about the site at this time. A customer could go to the site with a purchase order number and their Zip code and see the status of the order. This prevented a call in these situations which mean customer service could be dedicated to new business and resolving issues.
* The Dealer Login was a fully custom secure area with registration, password management, and the ability to review all pending orders.

## 2011
* Worked with a website company to build [a new site] with products listed. Using the data from the retail configurators, and enriching it with customer facing terms.
* Built a configurator using jquery to allow for custom configurations based on the same data set that drove the main site. Additional information was added to offer painting, staining, and hardware items not mentioned in the general site.
* Site also included a dealer locator that required geocoding dealer's addresses and connecting to google map API to determine location relative to zip or address provided. The distance calculated took into account the curvature of the earth which still amuses me.

## 2012
* Home Depot was switching to WTS Paradigm so I spent a week in Atlanta learning the new software. When I got back immediately got started building out the new catalog with the help of a consultant.
* Milliken decided to switch to a new ERP system called Ponderosa by Computer Associates Inc (CAi). Flew out with a small team to Rhode Island on the company plane. There we had a week long training session about building the product configurator.
* I believe this is about the time we brought on another developer to keep maintenance running on the existing catalogs while the new Home Depot catalog was being built. We needed more developers at this point.

## 2013
* Once we got back from training with CAi I got started documenting the required setup within the configurator. Infrastructure was still coming so the first few months were outlining the relationships between answers to ensure the system only offered valid combinations.
* Most of the year was spent ensuring items were populated into Ponderosa and that they were utilized in the product configurator. 
* The timeline was aggressive for a customer facing solution so the initial setup also included image based answers for the web as well as a dynamic visualization of the configured unit.
* Stom Doors were added to the offering and were added to both retail catalogs and the website.
* Milliken acquired a Millwork company headquartered out of Lancaster, PA so I spent a few days there learning about their setup and offering.

## 2014
* Was made the Lead Software Developer in March and made it official that other developers were reporting to me.
* No joke, we went live with Ponderosa on April 1st. The first part of the year was spent testing go-live critical configurator items. We had a principal develelopment completion date of the end of 2013 so we were squashing bugs and preparing the items that would launch after the initial go-live.
* As part of the setup of the configurator I proposed, and CAi implemented, new functionality to their configurator product to enable the filtering of answers based on previous answers to questions.
* Since the Ponderosa configurator is mostly freely typed text I built a number of reports to validate consistency.
* Prior to going live with the new Ponderosa web portal the existing portal utilized both the order data from Prism (the old ERP) and used the API from Ponderosa so no interruption took place for the customer.
* After go-live we focused on getting the web portal for dealers ready to launch. I believe we went live with what they branded as MMI Design in October with the first high priority customers.
* At launch we had product visualization that would apply the customer's paint or stain options to the product they were building. It took almost 7 years before the same would be true for the retail catalogs in a way that was a reasonable representation.

## 2015
* Added another developer bringing the team to three.
* Maintaining projects through Trello.
* Added 14k special order interior doors to the catalog utilizing ImageMagick for manipulating thousands of unique images.
* Added catalog support for selling to Menards.
* Transitioned to local hosting for retail catalog including build management and admin duties.
* Wrote an Excel based application for the enrichment of e-commerce items for Home Depot online sales. Enabled marketing to maintain their enrichment materials in Excel and run the program that would fill out the documents they needed to send back. This removed copy and paste errors while also saving them hours per batch of products they were onboarding.
* Using the data in Ponderosa, I built a PHP script to extract the table and item data. From there it was enriched and relationships were established via a series of tables built to supply additional business logic that would have normally been provided by what Ponderosa calls dependencies. All this was used to populate the product offering and custom configurations offered on DoorBuy.com which launched in October.
* Menards releases the first Milliken catalog into all their stores on December 24th.
* Met my future wife!

## 2016
* Added another developer bringing the team to four.
* Helped with building a scaled back version of DoorBuy.com to be used as MMIDoor.com.
* Worked with CAi to define a tool that will utilize the Ponderosa configurator to create items for use with e-commerce. This dramatically increases the number of items that can be created.

## 2017
* August 25th JELD-WEN acquires Milliken Millwork and MMI Door is born. I don't recall the use of the MMI Door until the acquisition was announced and I cannot find anything announcing the name. It just shows up in the press release although they had started using email addresses with @mmidoor.com as early as July 2016.
* JELD-WEN immediately pulls the plug on DoorBuy.com.

## 2018
* Added two Junior Developers bringing the team to six.
* Worked with operations and pricing to adjust the way list prices are calculated. This resulted in a 60% reduction in the total number of priced items in the retail catalogs and made it faster to go to market for all customer facing prices (Brochures, Price Pages, Retail Catalogs).
* This is a massive undertaking and requires adjusting the pricing in the ERP as well as the retail catalogs at Home Depot, Lowe's, and Menards.
* To better align with other departments we begin managing project releases and communication through Basecamp.
* Both Junior Developers leave and are not replaced 😢.
* Remaining experienced developers leave or give notice. Scramble to get approval to start the hiring process so we're not back to just me with three retail catalogs, an ERP configurator, website, EDI automation, and e-commerce support.

## 2019
* Traveled to the Home Depot headquarters to discuss configurator future plans. Peers attended virtually with no problem 🤷.
* Worked with CAi to build an EDI automation program for retail catalog orders. These orders come over as a series of questions and answers and this new tool matches up the QA from the retail catalogs with the corresponding QA that live in the Ponderosa configurator. This eliminates the need for customer service to hand enter each of these custom orders.
* Move ticketing and release management to ServiceNow. Transition away from Basecamp and Track-IT.

## 2020
* Like many others we go virtual full time.
* Complete a few price increase releases as costs are very volatile.
* Twice during the year spend a week on furlow.
* Lowe's announces they are going to switch from Syndigo's m2o and join Menards and Home Depot on WTS Paradigm. We work to schedule all that work for a release in the middle of 2021.
* MMI team starts helping with ABS Talon catalog.

## 2021
* Complete required standard changes and a phased release of the MMI catalog at Lowe's.
* Some standard updates for Lowe's are nice enhancements and can be shared with other retailers so they see some quality of life changes up on their next release as well.
* Previous Product Owner for JELD-WEN doors announces his retirement and I put my hat in the ring.

## 2022
* The year of EDS 2.0. Each catalog needed to be upgraded to achieve Lowe's updated standards. This represented a significant change to the base setup of the product and could not really be done in phases.
* We also made changes to offer catalogs on the Vendo version of the Paradigm software.

## 2023
* Launched the F-4500 folding door, Fiberglass line discontinuation, black hinge addition, and did some cut down tests in select markets.
* WAVE project with the McKinsey group started in late October.

## 2024
* Year of WAVE initiatives starting with a complete revamp of the Exterior Door catalog with an emphasis on modern marketing materials and a quicker time to quote.
* Mid-year saw the roll out of the updated Exterior catalog and the beginning of reworked pricing rolling out into the Exterior and Interior catalogs.
* Once we were on to final testing with the JELD-WEN catalogs we turned our attention to the American Building Supply (ABS) catalogs for simplification and to improve the order entry experience.

## 2025
* Lowes.com launches interior configurable products where the retail catalog appears in stores for both JELD-WEN and ABS.
* End March 13th.
* Posted this recap on June 2nd which is 17 years from my start date.

I know I have more that I want to add in recent years but I think it can wait for now. Not going to let the perfect be the enemy of the good.

This is day {{ page.tag_numbers["100 Days To Offload"] }}  of #100DaysToOffload.

[Track-IT]: https://www.trackit.com/
[still see most of it]: https://web.archive.org/web/20100517114144/http://millikenmillwork.com/
[a new site]: https://web.archive.org/web/20111120183229/http://www.millikenmillwork.com/