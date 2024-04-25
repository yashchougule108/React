import Loading from "./Loading";
import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
//import Loading from "./Loading";
import Shimmer from "./Shimmer"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// const showObj=[{
    
//     "info": {
//         "id": "23716",
//         "name": "McDonald's",
//         "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
//         "locality": "Marunji Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Beverages",
//           "Cafe",
//           "Desserts"
//         ],
//         "avgRating": 4.4,
//         "parentId": "630",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 2.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "2.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 03:45:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "FREE ITEM"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mcdonalds-marunji-road-hinjawadi-pune-23716",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "105258",
//         "name": "UBQ by Barbeque Nation",
//         "cloudinaryImageId": "akbvvc2wh0wgei00vax4",
//         "locality": "Shankar Kalat Nagar",
//         "areaName": "Wakad",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "North Indian",
//           "Barbecue",
//           "Biryani",
//           "Kebabs",
//           "Mughlai",
//           "Desserts"
//         ],
//         "avgRating": 3.8,
//         "parentId": "10804",
//         "avgRatingString": "3.8",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 48,
//           "lastMileTravel": 4.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "45-50 mins",
//           "lastMileTravelString": "4.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:30:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-shankar-kalat-nagar-wakad-pune-105258",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "89140",
//         "name": "KFC",
//         "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//         "locality": "Wakad Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Biryani",
//           "American",
//           "Snacks",
//           "Fast Food"
//         ],
//         "avgRating": 4.2,
//         "parentId": "547",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 33,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 04:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "40% OFF",
//           "subHeader": "UPTO ₹80"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/kfc-wakad-road-hinjawadi-pune-89140",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "36014",
//         "name": "Subway",
//         "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//         "locality": "KAILASH HOTEL",
//         "areaName": "Tathawade",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Healthy Food",
//           "Salads",
//           "Snacks",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 3.9,
//         "parentId": "2",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 35,
//           "lastMileTravel": 4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "4.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:59:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/subway-kailash-hotel-tathawade-pune-36014",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "427774",
//         "name": "Chaayos Chai+Snacks=Relax",
//         "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
//         "locality": "Maan Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Bakery",
//           "Beverages",
//           "Chaat",
//           "Desserts",
//           "Home Food",
//           "Italian",
//           "Maharashtrian",
//           "Snacks",
//           "Street Food",
//           "Sweets"
//         ],
//         "avgRating": 4.4,
//         "parentId": "281782",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 4.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-maan-road-hinjawadi-pune-427774",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "64066",
//         "name": "NIC Ice Creams",
//         "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
//         "locality": "Maan Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹120 for two",
//         "cuisines": [
//           "Ice Cream",
//           "Desserts"
//         ],
//         "avgRating": 4.7,
//         "veg": true,
//         "parentId": "6249",
//         "avgRatingString": "4.7",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 4.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹149"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/nic-ice-creams-maan-road-hinjawadi-pune-64066",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "395196",
//         "name": "McDonald's Gourmet Burger Collection",
//         "cloudinaryImageId": "zteez26u0kyxhgcttlhs",
//         "locality": "Marunji Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "Burgers",
//           "Beverages",
//           "Cafe",
//           "Desserts"
//         ],
//         "avgRating": 4.6,
//         "parentId": "10761",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "50+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 2.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "2.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 03:45:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-marunji-road-hinjawadi-pune-395196",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "3168",
//         "name": "Eatsome- Wraps & Rolls",
//         "cloudinaryImageId": "e56240a4b58956f47a5a1f8392470fbe",
//         "locality": "Shankar Kalat Nagar",
//         "areaName": "Wakad",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "North Indian",
//           "Street Food",
//           "Biryani",
//           "Snacks",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "parentId": "471587",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 35,
//           "lastMileTravel": 4.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "4.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:00:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹100 OFF",
//           "subHeader": "ABOVE ₹249",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/eatsome-wraps-and-rolls-shankar-kalat-nagar-wakad-pune-3168",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "9025",
//         "name": "Baskin Robbins - Ice Cream Desserts",
//         "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
//         "locality": "Shankar Kalat Nagar",
//         "areaName": "Wakad",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Ice Cream",
//           "Desserts"
//         ],
//         "avgRating": 4.6,
//         "veg": true,
//         "parentId": "5588",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 05:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "40% OFF",
//           "subHeader": "UPTO ₹80"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-shankar-kalat-nagar-wakad-pune-9025",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "27807",
//         "name": "Natural Ice Cream",
//         "cloudinaryImageId": "iservsmulhi2ifzmxvco",
//         "locality": "Wakd Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹150 for two",
//         "cuisines": [
//           "Ice Cream",
//           "Desserts"
//         ],
//         "avgRating": 4.6,
//         "veg": true,
//         "parentId": "2093",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 4.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:45:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/natural-ice-cream-wakd-road-hinjawadi-pune-27807",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "352810",
//         "name": "Grameen Kulfi",
//         "cloudinaryImageId": "jmim5adn0qvumifex2cf",
//         "locality": "Maan Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹120 for two",
//         "cuisines": [
//           "Ice Cream",
//           "Desserts"
//         ],
//         "avgRating": 4.8,
//         "veg": true,
//         "parentId": "12175",
//         "avgRatingString": "4.8",
//         "totalRatingsString": "500+",
//         "sla": {
//           "deliveryTime": 29,
//           "lastMileTravel": 4.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 00:00:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "EVERY ITEM",
//           "subHeader": "@ ₹99"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/grameen-kulfi-maan-road-hinjawadi-pune-352810",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "410191",
//         "name": "The Brooklyn Creamery - Healthy Ice Cream",
//         "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
//         "locality": "Sector 32 A",
//         "areaName": "Nigdi",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Desserts",
//           "Ice Cream",
//           "Healthy Food"
//         ],
//         "avgRating": 4.3,
//         "veg": true,
//         "parentId": "236673",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 29,
//           "lastMileTravel": 4.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "brand",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-sector-32-a-nigdi-pune-410191",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "393858",
//         "name": "Samosa Singh",
//         "cloudinaryImageId": "77baefd8a5e319c828b4d7dff7260644",
//         "locality": "Wakad Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹150 for two",
//         "cuisines": [
//           "North Indian",
//           "Snacks",
//           "Desserts",
//           "Beverages",
//           "Street Food"
//         ],
//         "avgRating": 3.9,
//         "veg": true,
//         "parentId": "5639",
//         "avgRatingString": "3.9",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 34,
//           "lastMileTravel": 4.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "4.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 21:30:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹249",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/samosa-singh-wakad-road-hinjawadi-pune-393858",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "323673",
//         "name": "WarmOven Cake & Desserts",
//         "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
//         "locality": "Bhujbal Wasti",
//         "areaName": "Wakad",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Bakery",
//           "Desserts",
//           "Ice Cream",
//           "Beverages"
//         ],
//         "avgRating": 4.1,
//         "parentId": "9696",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 36,
//           "lastMileTravel": 4.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "4.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 05:00:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-bhujbal-wasti-wakad-pune-323673",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "261407",
//         "name": "Oven Story Pizza - Standout Toppings",
//         "cloudinaryImageId": "b39e4312ae2e9f65c3b58faaed83f488",
//         "locality": "Bhatewara nagar",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Pizzas",
//           "Pastas",
//           "Italian",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.5,
//         "parentId": "3534",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 3.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "23-33 mins",
//           "lastMileTravelString": "3.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹199",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-bhatewara-nagar-hinjawadi-pune-261407",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "261406",
//         "name": "Behrouz Biryani",
//         "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
//         "locality": "Bhatewara nagar",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹500 for two",
//         "cuisines": [
//           "Biryani",
//           "North Indian",
//           "Kebabs",
//           "Mughlai",
//           "Beverages",
//           "Desserts"
//         ],
//         "avgRating": 4.3,
//         "parentId": "1803",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 3.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "3.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Biryani.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Biryani.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹199",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/behrouz-biryani-bhatewara-nagar-hinjawadi-pune-261406",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "203925",
//         "name": "Burger King",
//         "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//         "locality": "Elprocity Square",
//         "areaName": "Chinchwad",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Burgers",
//           "American"
//         ],
//         "avgRating": 4,
//         "parentId": "166",
//         "avgRatingString": "4.0",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 56,
//           "lastMileTravel": 8.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "55-60 mins",
//           "lastMileTravelString": "8.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 02:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹120"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/burger-king-elprocity-square-chinchwad-pune-203925",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "238957",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Elpro City Square",
//         "areaName": "Pimpri",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 3.8,
//         "parentId": "721",
//         "avgRatingString": "3.8",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 57,
//           "lastMileTravel": 8.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "55-60 mins",
//           "lastMileTravelString": "8.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "30% OFF",
//           "subHeader": "UPTO ₹75"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/pizza-hut-elpro-city-square-pimpri-pune-238957",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "248961",
//         "name": "Wow! Momo",
//         "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
//         "locality": "Chinchwad",
//         "areaName": "Chinchwad",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Tibetan",
//           "Healthy Food",
//           "Asian",
//           "Chinese",
//           "Snacks",
//           "Continental",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.1,
//         "parentId": "1776",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 56,
//           "lastMileTravel": 8.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "55-60 mins",
//           "lastMileTravelString": "8.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-01 03:00:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹99"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/wow-momo-chinchwad-pune-248961",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "41804",
//         "name": "Sweet Truth - Cake and Desserts",
//         "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
//         "locality": "Maan Road Om plaza 2nd floor",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹450 for two",
//         "cuisines": [
//           "Desserts",
//           "Bakery",
//           "Ice Cream",
//           "Snacks"
//         ],
//         "avgRating": 4.3,
//         "parentId": "4444",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 29,
//           "lastMileTravel": 4.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-03-31 23:59:00",
//           "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {

//             },
//             "textBased": {

//             },
//             "textExtendedBadges": {

//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "60% OFF",
//           "subHeader": "UPTO ₹110"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {

//             },
//             "video": {

//             }
//           }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         }
//       },
//       "analytics": {

//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-maan-road-om-plaza-2nd-floor-hinjawadi-pune-41804",
//         "type": "WEBLINK"
//       }
//     }]
    

const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState([]);
    const [searchTxt,setSearchText]=useState("");
    
    useEffect(()=>{
      fetchData();
    },[])
    const fetchData= async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json= await data.json();
    //console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
    return <h1>Looks like you're offline!! please check your internet connection</h1>
  }
  if(listOfRestaurants.length===0){
    return <Shimmer/>
  }
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    
    return(
        <div className="body">
          
            <div className="filter flex ">
            <div className="search m-4 p-4">
              <input type="text" className="search-box rounded-md border border-black" value={searchTxt} 
              onChange={(e)=>{
                setSearchText(e.target.value);

              }}></input>
              <button className="search-btn m-1 border border-black bg-blue-500 rounded-md px-4 py-1 hover:bg-white hover:font-bold" onClick={()=>{
               const filteresReseaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
               setFilteredList(filteresReseaurant);
              }
              }>Search</button>
            </div> 
            <div className="m-4 p-4 flex items-center">         
                <button className="btn  px-4 py-1 border border-black rounded-lg" type="submit" onClick={()=>{ 
                    const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
                    setFilteredList(filteredList);

                }}>Top Rated</button>
            </div>
            
            </div>

            <div className=" flex flex-wrap ">
              
                {/* <RestaurantCard resName="BK" cuisine="Burger,Spicy,Fast Food" rating="4.3 stars" deliverytime="30 minutes"/>
                <RestaurantCard resName="kfc" cuisine="Burger,Spicy,Fast Food" rating="4.3 stars" deliverytime="30 minutes"/> */}
                {/* <RestaurantCard restData={showObj[0]}/>
                <RestaurantCard restData={showObj[1]}/>
                <RestaurantCard restData={showObj[2]}/>
                <RestaurantCard restData={showObj[3]}/>
                <RestaurantCard restData={showObj[5]}/> */}
                {
                    filteredList.map((restaurant)=>(
                      <Link keys={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        {restaurant.info.avgRating>4?<RestaurantCardPromoted restData={restaurant}/>:<RestaurantCard restData={restaurant}/>}
                        </Link>  
                    ))
                }
               
                


            </div>

        </div>
    )
}

export default Body;