import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export const events = [
    {
        id: 1,
        title: "Hawa Mahal",
        ticketsLeft: "Limited tickets available",
        category: "jaipur",
        price: "₹899 - ₹4999",
        description: "Hawa Mahal, or the Palace of Winds, is an iconic structure in Jaipur, built in 1799 by Maharaja Sawai Pratap Singh. Its unique five-story facade.",
        location: "Jaipur",
        image: [
            "https://assets.vogue.in/photos/5ce41ea8b803113d138f5cd2/16:9/w_1920,h_1080,c_limit/Jaipur-Travel-Shopping-Restaurants.jpg",
            "https://www.india-a2z.com/images/hawa-mahal.png",
            
            "https://img.freepik.com/premium-photo/hawa-mahal-palace-jaipur-india-s-famous-sight_400112-261.jpg",
            "https://static.toiimg.com/thumb/msid-103378759,width-748,height-499,resizemode=4,imgsize-147006/.jpg",
            "https://media.cnn.com/api/v1/images/stellar/prod/230224161145-08-palace-of-the-winds-overview.jpg?c=original&q=h_447,c_fill",
            

        ],
        locationUrl: "https://www.google.com/maps/place/Hawa+Mahal+Rd,+Pink+City,+Jaipur,+Rajasthan+302002/@26.9266926,75.8230705,859m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396db136191b9f27:0x89d47d26eeed2034!8m2!3d26.9266927!4d75.8279361!16s%2Fg%2F1ptwj2f34?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/01/2025",
        organizer: "Rajasthan Tourism",
    },
    {
        id: 2,
        title: "Amer Fort ",
        ticketsLeft: "Limited tickets available",
        category: "jaipur",
        price: "₹899 - ₹4999",
        description: "Amer Fort, a majestic hilltop fortress in Jaipur, was built in the 16th century by Maharaja Man Singh I. Combining Rajput and Mughal architectural styles.",
        location: "Jaipur",
        image: [
            "https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=raUKDB1Mris9Z7SjvuuTieZRzF2-CaKukGvTC8t1kuo=",
            "https://s7ap1.scene7.com/is/image/incredibleindia/amber-fort-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742157903972",
            "https://hblimg.mmtcdn.com/content/hubble/img/jaipur/mmt/activities/m_activities_amber_fort_2_l_436_573.jpg",
            "https://travelogyindia.b-cdn.net/storage/app/itinerary/75/amer-fort-in-jaipur.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPe-VVYi_jT6JxdfzeLvl_EnFAl8EThrJis_d5YLjy994W3suYvxlHJV0-6r9tbFksPdtC2oNsG_t8wzjn2AyJpXl759oH4A-ikTW8rnVIypJFWlMM7sStGvUbwUXElSDyaMAsOOa5nnPpcM8Xb_I00hvSF1yPGJWl5t7VacRoXDo0wVbwhK2Fjl8hZX0/s1024/Amber%20Fort-%20The%20Jewel%20of%20Jaipur%E2%80%99s%20Rajput%20Architecture-11.jpg",
        ],
        locationUrl: "https://www.google.com/maps/dir//Amber+Palace,+Devisinghpura,+Amer,+Jaipur,+Rajasthan+302001/@26.9879689,75.8415016,3436m/data=!3m1!1e3!4m18!1m8!3m7!1s0x396db05acbd20dfb:0x6221df6747147e2b!2sAmber+Palace!8m2!3d26.9854865!4d75.8513454!15sCglhbWVyIGtpbGFaCyIJYW1lciBraWxhkgEGY2FzdGxlqgEyEAEyHxABIhvqgtRnrGZNEYJzoF2E4tJiZ6EyL3JUAOVjL4syDRACIglhbWVyIGtpbGHgAQA!16zL20vMDgxanYz!4m8!1m0!1m5!1m1!1s0x396db05acbd20dfb:0x6221df6747147e2b!2m2!1d75.8513454!2d26.9854865!3e9?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/02/2025",
        organizer: "Rajasthan Tourism",
    },
    {
        id: 3,
        title: "Jal Mahal ",
        ticketsLeft: "Limited tickets available",
        category: "jaipur",
        price: "₹899 - ₹4999",
        description: "Jal Mahal, the Water Palace, is a beautiful Rajput-style palace located in the middle of Man Sagar Lake in Jaipur. For the royal family in the 18th century.",
        location: "Jaipur",
        image: [
            "https://media.istockphoto.com/id/598558406/photo/the-palace-jal-mahal-at-night.jpg?s=612x612&w=0&k=20&c=0MSfvYWssJmJtFj_rWSf6TqJBOaN4hOlEQuuw_nHqfQ=",
           "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742162446740",
           "https://thrillingtravel.in/wp-content/uploads/2016/07/Jal-Mahal_Jaipur.jpg ",
           "https://fairlinkgroup.com/uploads/blog/1597403188.jpg",
           "https://www.royalorchidhotels.com/images/Blog/04_Nov_2022_02_37_44Jal-Mahal_600-1280x720.jpg",
          
        ],
        locationUrl: "https://www.google.com/maps/place/Jal+Mahal,+Amer,+Jaipur,+Rajasthan/@26.964925,75.830837,6873m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396db10189be64eb:0x9366ee1922c4a947!8m2!3d26.9656041!4d75.8592052!16s%2Fg%2F1jkz50vp0?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/03/2025",
        organizer: "Rajasthan Tourism",
    },
    {
        id: 4,
        title: "Albert Hall Museum ",
        ticketsLeft: "Limited tickets available",
        category: "jaipur",
        price: "₹899 - ₹4999",
        description: "Albert Hall Museum, located in the heart of Jaipur, is the oldest museum in Rajasthan, built in 1887. Designed in Indo-Saracenic style.",
        location: "Jaipur",
        image: [
            "https://c8.alamy.com/comp/MYJTGA/albert-hall-museum-and-square-with-pigeons-jaipur-MYJTGA.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Albert_Hall_%28_Jaipur_%29.jpg",
            "https://www.emperortraveline.com/wp-content/uploads/2020/10/Albert-hall-museum.jpg",
            "https://static.independent.co.uk/2024/09/30/12/Albert_Hall_Museum_Night_View.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1WYATvRVTXH2b80cOpc-Iuf-HD8YICPJCVMRpggAMb6hCFnI-jbKCyr5jxkWZOcFkckU5gv6GX4Ln4UDizuZhtgg6R_LtwqAF2vYphjdlsv2lpesBHP-dhfzK6jqaYkHFRpQ99FzqCv5f4bKoe6JRmDkjMls1VRPBTL1aeDQyrwwmKOHq7IuYqOZfr1Q/s1024/Albert%20Hall%20Museum%2C%20Jaipur-%20A%20Glimpse%20into%20Rajasthan%27s%20Cultural%20Legacy-1-2.jpg",
           
        

        ],
        locationUrl: "https://www.google.com/maps/place/Albert+Hall+Museum/@26.9115849,75.8168317,860m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396db6b03af9295f:0x5bb4333133c6968!8m2!3d26.9115849!4d75.819412!16s%2Fm%2F0c3xt3y?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/04/2025",
        organizer: "Rajasthan Tourism",
    },
    {
        id: 5,
        title: "City Park ",
        ticketsLeft: "Limited tickets available",
        category: "jaipur",
        price: "₹899 - ₹4999",
        description: "City Park, located in the heart of Jaipur, is a peaceful green oasis offering a perfect escape from the hustle and bustle of the city. The park features well-maintained gardens, serene walking paths, and beautiful landscapes.",
        location: "Jaipur",
        image: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/83/63/c8/it-s-beautiful-ticket.jpg?w=1200&h=1200&s=1",
            "https://www.pinkcitypost.com/wp-content/uploads/2022/11/city-park-mansarovar-jaipur-xxlx2kxx2.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/City_Park_Jaipur_View.jpg",
          "https://mysterioustrip.com/wp-content/uploads/2023/06/city-park-jaipur-2-1024x740.webp",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/83/63/c8/it-s-beautiful-ticket.jpg?w=900&h=500&s=1"
        ],
        locationUrl: "https://www.google.com/maps/place/CityPark+Jaipur/@26.8598066,75.7618227,860m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396db5debf22fa8f:0x79ea81d0af2764a3!8m2!3d26.8598066!4d75.764403!16s%2Fg%2F11k0605wp1?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/05/2025",
        organizer: "Jaipur Development Authority",
    },
    {
        id: 6,
        title: "Patrika Gate ",
        ticketsLeft: "Limited tickets available",
        category: "jaipur",
        price: "₹899 - ₹4999",
        description: "Patrika Gate, a stunning architectural marvel located at the entrance of the Jawahar Circle Garden in Jaipur, is a vibrant representation of Rajasthan’s rich culture and heritage.",
        location: " Jaipur",
        image: [
            "https://www.hoteldekho.com/storage/img/tourattraction/1646308876Patrika%20Gate%20jaipur-Jawahar-Circle.jpg",
            "https://accidentallywesanderson.com/wp-content/uploads/2020/08/116835162_3218478568212390_2166382344539066682_n.jpg",
            "https://thirdeyetraveller.com/wp-content/uploads/PATRIKAGATE-1-of-1-2-scaled.jpg",
            "https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D400%2Cheight%3D265%2Cdpr%3D2/tour_img/6484b38c4152e.jpeg",
           
        ],
        locationUrl: "https://www.google.com/maps/place/CityPark+Jaipur/@26.8598066,75.7618227,860m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396db5debf22fa8f:0x79ea81d0af2764a3!8m2!3d26.8598066!4d75.764403!16s%2Fg%2F11k0605wp1?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/06/2025",
        organizer: "Patrika Group",
    },
    {
        id: 7,
        title: "World Trade Park (WTP) ",
        ticketsLeft: "Limited tickets available",
        category: "jaipur",
        price: "₹899 - ₹4999",
        description: "World Trade Park (WTP) is one of Jaipur’s premier commercial and shopping destinations, located in the heart of the city. This modern architectural with a blend of glass and concrete, making it an iconic landmark.",
        location: "  Jaipur",
        image: [
            "https://www.shopkhoj.com/wp-content/uploads/2018/07/World-Trade-Park.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/9f/World_Trade_Park.jpg ",
            "https://content.jdmagicbox.com/comp/jaipur/89/0141p141std41289/catalogue/world-trade-park-malviya-nagar-jaipur-malls-0fahfnihlt.jpg",
            "https://jaipurbeat.wordpress.com/wp-content/uploads/2018/12/world-trade-park_9.jpg",
            "https://esimly.io/wp-content/uploads/2025/07/World-Trade-Park-Mall-scaled.jpg",
           
        ],
        locationUrl: "https://www.google.com/maps/search/wtp/@26.853204,75.8023015,860m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/07/2025",
        organizer: "World Trade Park",
    },
    {
        id: 8,
        title: "Mehrangarh Fort ",
        ticketsLeft: "Limited tickets available",
        category: "jhodhapur",
        price: "₹899 - ₹4999",
        description: "Mehrangarh Fort is one of the largest and most magnificent forts in India, located in Jodhpur, Rajasthan. It is perched atop a 410-foot high hill.",
        location: " Jodhpur",
        image: [
            "https://www.ethnicrajasthan.com/cdn/shop/articles/mehrangarh.jpg?v=1466078837&width=2048",
           "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mehrangarh_Fort_sanhita.jpg/1200px-Mehrangarh_Fort_sanhita.jpg",
           "https://media.assettype.com/homegrown/2024-04/937a15bb-f868-422b-b68c-db03949abaf2/Untitled_design___2024_04_29T182658_598.png?auto=format%2Ccompress&enlarge=true&fit=max&h=675&w=1200",
           "https://s7ap1.scene7.com/is/image/incredibleindia/mehrangarh-fort-jodhpur-rajasthan-hero?qlt=82&ts=1726660826646",
           "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2018/09/mehrangarh-Fort-Jodhpur.jpg",
          

        ],
        locationUrl: "https://www.google.com/maps/search/mehrangarh+fort+jodhpur/@26.2981867,72.9935792,6913m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/08/2025",
        organizer: "Mehrangarh Museum Trust",
    },
    {
        id: 9,
        title: "Umaid Bhawan Palace",
        ticketsLeft: "Limited tickets available",
        category: "jhodhapur",
        price: "₹899 - ₹4999",
        description: "Umaid Bhawan Palace, a magnificent palace built by Maharaja Umaid Singh, is one of the world's largest private residences and a popular tourist spot.",
        location: " Jodhpur ",
        image: [
            "https://rajputanacabs.b-cdn.net/wp-content/uploads/2021/10/umaid-bhawan-palace-jodhpur-rj.webp",
            "https://images.unsplash.com/photo-1596707010452-f472f8b5f3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://assets.cntraveller.in/photos/60c6d52f9c490a1841444131/master/pass/Umaid-Bhawan-Palace-Jodhpur-Rajasthan-India-1-1366x768.jpeg",
            "https://www.traveltriangle.com/blog/wp-content/uploads/2019/12/Umaid-Bhawan-Palace-Jodhpur.jpg",
            "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/tourist-attractions/umaid-bhawan-palace/Umaid-Bhawan-Palace-1.jpg",
        ],
        locationUrl: "https://www.google.com/maps/place/Umaid+Bhawan+Palace,+Jodhpur/@26.2810297,73.0424366,864m/data=!3m2!1e3!4b1!4m9!3m8!1s0x39418cfa2d57b3f7:0xccd024507880be71!5m2!4m1!1i2!8m2!3d26.2810298!4d73.0473022!16zL20vMDVnMnl4?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/09/2025",
        organizer: "Taj Hotels",
    },
    {
        id: 10,
        title: " Blue City",
        ticketsLeft: "Limited tickets available",
        category: "jhodhapur",
        price: "₹899 - ₹4999",
        description: "Jodhpur, famously known as the 'Blue City', is the second-largest city in the Indian state of Rajasthan. The city earned its nickname due to the vivid blue-painted houses.",
        location: "Jodhpur ",
        image: [
            "https://theindianchronicles.in/wp-content/uploads/2022/10/Jodhpur_mehrangarh_fort_enhanced.jpg",
            "https://www.theleela.com/prod/sites/default/files/2021-06/jodhpur-rajasthan.jpg",
            "https://assets.cntraveller.in/photos/60c6d52f9c490a1841444131/master/pass/Jodhpur-Rajasthan-India-2-1366x768.jpeg",
            "https://www.holidify.com/images/cmsuploads/compressed/BlueCityJodhpur-1_20191216140510.jpg",
            "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/destination/jodhpur/Jodhpur-1.jpg",
        ],
        locationUrl: "https://maps.app.goo.gl/JBCz7j9u6j8o9s2jW6",
        date: "01/10/2025",
        organizer: "Jodhpur Tourism",
    },
    {
        id: 11,
        title: "Jaswant Thada ",
        ticketsLeft: "Limited tickets available",
        category: "jhodhapur",
        price: "₹899 - ₹4999",
        description: "Jaswant Thada is a cenotaph located in Jodhpur, Rajasthan, India. It was built by Maharaja Sardar Singh of Jodhpur State in 1899 in memory of his father, Maharaja Jaswant Singh II.",
        location: "Jodhpur",
        image: [
            "https://live.staticflickr.com/7100/27303528334_9f3b69b161_b.jpg",
            "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/tourist-attractions/jaswant-thada/Jaswant-Thada-1.jpg",
            "https://www.tourmyindia.com/blog/wp-content/uploads/2021/01/Jaswant-Thada-Jodhpur-FI.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/JaswantThada-2_20191216140532.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/JaswantThada-1_20191216140510.jpg",
        ],
        locationUrl: "https://www.google.com/maps/place/Jaswant+Thada/@26.3040998,73.022781,864m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39418dbbe80cf185:0xef978326c4f61fbd!8m2!3d26.3040998!4d73.0253613!16s%2Fg%2F11c6r33zqs?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/11/2025",
        organizer: "Jodhpur Tourism",
    },
    {
        id: 12,
        title: "Havelis of Heritage",
        ticketsLeft: "",
        category: "mandawa",
        price: "₹8999 - ₹41999",
        description: "Whether your guest list is long or short, our versatile function rooms at #CastleManadawa are made best suited for your wedding reception",
        location: "Mandawa ",
        image: [
            "https://www.savaari.com/blog/wp-content/uploads/2022/05/10517833706_8aa936cba2_h.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/Mandawa-Havelis-1_20191216140510.jpg",
            "https://www.traveltriangle.com/blog/wp-content/uploads/2019/12/Mandawa-Havelis.jpg",
            "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/destination/mandawa/Mandawa-Havelis.jpg",
            "https://i.pinimg.com/736x/8f/c9/79/8fc979313b28b497e88248c8b6b0c609.jpg",
        ],
        locationUrl: "https://www.google.com/maps/place/Haveli+Dharampura/@28.6534175,77.2296701,846m/data=!3m2!1e3!4b1!4m9!3m8!1s0x390cfd197dd6fb4b:0x749b9a5abf91404b!5m2!4m1!1i2!8m2!3d28.6534175!4d77.2322504!16s%2Fg%2F11g0289gzb?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/12/2025",
        organizer: "Castle Mandawa",
    },
    {
        id: 13,
        title: "Gulab Rai Ladia Haveli",
        ticketsLeft: "",
        category: "mandawa",
        price: "₹899 - ₹4999",
        description: "Akbars palace, constructed in 1570AD is the place where he and his troops stayed in at Ajmer whenever he visited the Ajmer Sharif Dargah. It is well known for the museum",
        location: "Mandawa ",
        image: [
            "https://media2.thrillophilia.com/images/photos/000/356/271/original/1601474848_shutterstock_1053573509.jpg?w=753&h=450&dpr=1.5",
            "https://www.holidify.com/images/cmsuploads/compressed/GulabRaiLadiaHaveli-1_20191216140510.jpg",
            "https://www.traveltriangle.com/blog/wp-content/uploads/2019/12/Gulab-Rai-Ladia-Haveli.jpg",
            "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/destination/mandawa/Gulab-Rai-Ladia-Haveli.jpg",
            "https://i.pinimg.com/736x/8f/c9/79/8fc979313b28b497e88248c8b6b0c609.jpg",
        ],
        locationUrl: "https://www.google.com/maps/place/The+Gulab+Haveli/@28.0529802,75.1445156,851m/data=!3m1!1e3!4m10!3m9!1s0x39135aae5eb2f86f:0xd30c57b4289b22e!5m3!1s2025-08-19!4m1!1i2!8m2!3d28.0529802!4d75.1470959!16s%2Fg%2F11c6r33zqs?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/13/2025",
        organizer: "Mandawa Tourism",
    },
    {
        id: 14,
        title: "Sethani Ka Johara",
        ticketsLeft: "",
        category: "mandawa",
        price: "₹899 - ₹4999",
        description: "Sethani Ka Johara, a beautiful water reservoir built by the wife of a wealthy merchant, is a peaceful spot in the heart of Mandawa.",
        location: "Mandawa ",
        image: [
            "https://i0.wp.com/stampedmoments.com/wp-content/uploads/2024/07/sethani-ka-johara-churu.jpg?fit=1024%2C768&ssl=1",
            "https://www.holidify.com/images/cmsuploads/compressed/SethaniKaJohara-1_20191216140510.jpg",
            "https://www.traveltriangle.com/blog/wp-content/uploads/2019/12/Sethani-Ka-Johara.jpg",
            "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/destination/mandawa/Sethani-Ka-Johara.jpg",
            "https://i.pinimg.com/736x/8f/c9/79/8fc979313b28b497e88248c8b6b0c609.jpg",
        ],
        locationUrl: "https://www.google.com/maps/place/Sethani+Ka+Johara/@28.2979769,74.9250124,849m/data=!3m1!1e3!4m6!3m5!1s0x39149dd697055b75:0x44c5ec0ba55a5eeb!8m2!3d28.2979769!4d74.9275927!16s%2Fg%2F11f1k3mz8x?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/14/2025",
        organizer: "Mandawa Tourism",
    },
    {
        id: 15,
        title: "Lake Pichola",
        ticketsLeft: "hello",
        category: "udaipur",
        price: "₹8999 - ₹41999",
        description: "Bring your celebrations to the City of Lakes and let us make a special occasion even more special against a backdrop",
        location: "Udaipur ",
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhoHhbL9syalKlwTji6hGd50EnbLF9_ApBA&s",
            "https://www.holidify.com/images/cmsuploads/compressed/LakePichola-1_20191216140510.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/LakePichola-2_20191216140532.jpg",
            "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/tourist-attractions/lake-pichola/Lake-Pichola-1.jpg",
            "https://www.traveltriangle.com/blog/wp-content/uploads/2019/12/Lake-Pichola-Udaipur.jpg",
        ],
        locationUrl: "https://www.google.com/maps/place/Lake+Pichola/@24.5719946,73.6400742,7013m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3967e56041553fe7:0xdfef96846886cdd0!8m2!3d24.572!4d73.679!16s%2Fm%2F047sc0n?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/15/2025",
        organizer: "Udaipur Tourism",
    },
    {
        id: 16,
        title: " City of Lakes",
        ticketsLeft: "",
        category: "udaipur",
        price: "₹899 - ₹4999",
        description: "The Rajasthan govt is vying to make Udaipur the country’s first wetland city. The environment and forest dept has chosen the city as per the Ramsar.",
        location: "Udaipur ",
        image: [
            "https://media2.thrillophilia.com/images/photos/000/115/725/original/1514367673_shutterstock_289362869.jpg?width=975&height=600",
            "https://www.holidify.com/images/cmsuploads/compressed/CityofLakes-1_20191216140510.jpg",
            "https://www.holidify.com/images/cmsuploads/compressed/CityofLakes-2_20191216140532.jpg",
            "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/destination/udaipur/Udaipur-1.jpg",
            "https://www.traveltriangle.com/blog/wp-content/uploads/2019/12/City-of-Lakes-Udaipur.jpg",
        ],
        locationUrl: "https://www.google.com/maps/place/Udaipur,+Rajasthan/@24.6082806,73.6635866,14022m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3967e56550a14411:0xdbd8c28455b868b0!8m2!3d24.585445!4d73.712479!16zL20vMGJfa2Z5?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
        date: "01/16/2025",
        organizer: "Udaipur Tourism",
    },
];

const AllPlaces = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [relatedImages, setRelatedImages] = useState([]);

    const categories = [
        { id: "all", name: "All Gallery" },
        { id: "jaipur", name: "Jaipur" },
        { id: "jhodhapur", name: "Jodhpur" },
        { id: "mandawa", name: "Mandawa" },
        { id: "udaipur", name: "Udaipur" },
    ];

    const filteredEvents =
        activeCategory === "all"
            ? events
            : events.filter((event) => event.category === activeCategory);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [activeCategory]);

    const handleBookNow = (event) => {
        localStorage.setItem("currentBooking", JSON.stringify(event));
        navigate("/bookingform");
    };

    const handleImageClick = (event) => {
        setSelectedImage(event.image[0]);
        setRelatedImages(event.image);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedImage(null);
        setRelatedImages([]);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="w-full max-w-7xl mx-auto py-16 cursor-pointer px-4 sm:px-6 lg:px-8">
            {loading ? (
                <div className="text-center text-gray-500 text-xl py-16">
                    <div className="text-center mb-12 space-y-4">
                        <div className="mx-auto bg-gray-300 rounded-lg h-12 w-3/4 animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {Array(4)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col h-full animate-pulse"
                                >
                                    <div className="bg-gray-300 rounded-t-xl h-48 w-full" />
                                    <div className="p-5 flex flex-col flex-grow space-y-3">
                                        <div className="h-6 bg-gray-300 rounded w-3/4" />
                                        <div className="h-12 bg-gray-300 rounded w-full" />
                                        <div className="h-5 bg-gray-300 rounded w-1/3" />
                                    </div>
                                    <div className="mt-auto">
                                        <div className="h-10 bg-gray-300 rounded-b-xl w-full" />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                <>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-pink-500 mb-3">
                            ✨ Royal palaces, desert adventures, and colorful culture –
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            👉 Choose your city, pack your bags, and book now!
                        </p>
                    </div>
                    <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
                        <div className="flex space-x-3 mx-auto">
                            {categories.map((category) => (
                                <div key={category.id}>
                                    <button
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                                            activeCategory === category.id
                                                ? "bg-pink-600 text-white shadow-md"
                                                : "bg-white text-gray-700 border border-gray-200 hover:border-pink-300"
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                            {filteredEvents.map((event, i) => (
                                <motion.div
                                    key={event.id}
                                    custom={i}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="bg-white rounded-xl shadow-md hover:shadow-xl hover:sca transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
                                >
                                    <div className="relative cursor-pointer ">
                                        <img
                                            src={event.image[0]}
                                            alt={event.title}
                                            className="w-full -z-1 h-48 object-cover rounded-t-xl hover:brightness-50 hover:scale-105 duration-500"
                                            loading="lazy"
                                            onClick={() => handleImageClick(event)}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-t-xl">
                                            <h3 className="text-white font-bold text-lg">
                                                {event.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex items-center text-gray-500 mb-3">
                                            <span className="mr-2 text-sm text-gray-700 font-bold">
                                                {event.location}
                                            </span>
                                            <a
                                                href={event.locationUrl}
                                                className="p-2 flex text-pink-600 font-semibold"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaLocationArrow className="mt-1 text-pink-600 mr-1 text-sm" />
                                                view map
                                            </a>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                                            {event.description}
                                        </p>
                                        <p className="font-bold   text-pink-600 pb-2 ml-1">price:
                                             <span className="text-pink-500 font-semibold  "> {event.price}</span>  
                                            </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            
                                            <button
                                                className="py-2 w-full hover:scale-105 focus:scale-90 bg-pink-600 text-white rounded-xl hover:bg-pink-700  duration-500"
                                                onClick={() => handleBookNow(event)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </>
            )}


            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10 p-4">
                    <div className="relative max-w-4xl bg-white/10 w-full backdrop-blur-2xl rounded-lg shadow-2xl overflow-hidden max-h-[80vh] mt-16 flex flex-col lg:flex-row">
                        <button
                            onClick={handleClosePopup}
                            className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-red-700 z-10"
                        >
                            <FaTimes size={20} className="hover:rotate-[360deg] duration-700" />
                        </button>

                        <div className="flex-1 p-4 flex items-center justify-center overflow-hidden">
                            <img src={selectedImage} alt="Full view" className="max-h-full full object-cover rounded-lg shadow-md" />
                        </div>

                        <div className="lg:w-1/4 p-4 max-h-auto mt-12 bg-white/40 backdrop-blur-2xl  flex-shrink-0 lg:flex-grow-0 overflow-y-auto">
                            <h4 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">View More Images!</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 xs:grid-cols-3 md:grid-cols-4 xl-grid-cols-2  lg:grid-cols-1 gap-1">
                                {relatedImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full cursor-pointer overflow-hidden rounded-md shadow-sm border-2 border-transparent transition-all hover:border-pink-500"
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-24 object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AllPlaces;






















