/*  demo.js: 
      inserts demo data (MozFest badges) under the DEMO_OWNER account,
      if the account is empty
*/

const DEMO_OWNER = "demo@stenington.org"; // demo@stenington.org is a MockMyID account

Meteor.startup(function () {
  var arr = [
    {
      "name": "MozFest Session Leader",
      "shortname": "mozfest-session-leader",
      "description": "The MozFest 2013 Session Leader badge acknowledging personal commitment to sharing ideas about openness at the Mozilla Festival.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-session-leader.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-session-leader",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Session Leader Badge is special edition badge acknowledging personal commitment to sharing ideas about openness at the Mozilla Festival. It is earned by planning, preparing and leading an active session in one of the ten festival tracks. It recognizes the skills of working, sharing, and building the future among peers at MozFest.\r\n\r\nThis skill badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Producer",
      "shortname": "mozfest-producer",
      "description": "The MozFest 2013 Session Producer Badge is special edition badge acknowledging superhuman work structuring, planning and breathing life into one of the ten tracks celebrated during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-producer.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-producer",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Session Producer Badge is special edition badge acknowledging superhuman work structuring, planning and breathing life into one of the ten tracks celebrated during MozFest. It recognizes the skills of working, sharing, and building the future among peers at MozFest.\r\n\r\nThis skill badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Supporter",
      "shortname": "mozfest-supporter",
      "description": "The MozFest 2013 Supporter Badge is special edition badge acknowledging the people who tirelessly buzz around each of the ten tracks at MozFest ensuring that everything is humming along.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-supporter.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-supporter",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest 2013 Supporter Badge is special edition badge acknowledging the people who tirelessly buzz around each of the ten tracks at MozFest ensuring that everything is humming along. It recognizes the skills of collaborative working, sharing, and building the future among peers at MozFest.\r\n\r\nThis skill badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Sharer",
      "shortname": "mozfest-sharer",
      "description": "The MozFest 2013 Sharer Badge is special edition badge acknowledging the people working the social media communication channels, informing the world about the possibilities of an open future of learning, making, journalism, data, science, privacy, and mobile.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-sharer.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-sharer",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Sharer Badge is special edition badge acknowledging the people working the communication channels of Twitter, Facebook, Instagram, Tumblr, and other social media sites, informing the world about the possibilities of an open future of learning, making, journalism, data, science, privacy, and mobile. It is earned by actively tweeting, facebooking, instagramming, tumblring and overall social media-ing the activities happening at MozFest.\r\n\r\nThis skill badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Mentorer",
      "shortname": "mozfest-mentorer",
      "description": "The MozFest 2013 Mentorer Badge is special edition badge acknowledging the individuals working to help others build, create, and learn at MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-mentorer.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-mentorer",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Mentorer Badge is special edition badge acknowledging the individuals working to help others build, create, and learn at MozFest. It is earned by actively mentoring during sessions, encouraging and aiding dynamic approaches to digital making, hands-on making, and collaborating. Working among MozFest peers, people connect to other people, creating a valuable peer network that transcends boundaries.\r\n\r\nThis skill badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Webmaker",
      "shortname": "mozfest-webmaker",
      "description": "The MozFest 2013 Webmaker Badge is special edition badge acknowledging the people bringing Webmaker to life: building and teaching the web during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-webmaker.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-webmaker",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest 2013 Webmaker Badge is special edition badge acknowledging the people building and teaching the web with Webmaker during MozFest. It is earned by actively participating in a Build and Teach the Web session track. During these sessions, people mash up digital culture, art, film and storytelling. Working among MozFest peers, they hack on code, share ideas, prototype examples and advance new concepts for and about the web.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Maker",
      "shortname": "mozfest-maker",
      "description": "The MozFest 2013 Maker Badge is special edition badge acknowledging the people interested in combining the physical with the virtual worlds, working as Makers during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-maker.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-maker",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest 2013 Maker Badge is special edition badge acknowledging the people working as Makers during MozFest. It is earned by actively participating in a Make the Web Physical session track. During these sessions, people make things do stuff; they escape the limitations of the virtual web and make it physical. Working among their MozFest peers, they use tools such as Arduino, Raspberry Pi and sensors to bring to life 3D printers and laser cutters. They experiment with and use old school tools like paper and scissors to create new visions for the intersection between the physical world and the web. \r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Badger",
      "shortname": "mozfest-badger",
      "description": "The MozFest 2013 Badger Badge is special edition badge acknowledging the people committed to creating new representations of credentialing, working on and with Mozilla Open Badges during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-badger.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-badger",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Badger Badge is special edition badge acknowledging the people committed to working on and with Mozilla Open Badges during MozFest. It is earned by actively participating in an Open Badges session track. During these sessions, people challenge the conventional systems of recognizing skills and learning and create new concepts of assessment and acknowledgement. Working among peers, people hack on code, share ideas, prototype examples, and advance new concepts of learning and achievements.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Newser",
      "shortname": "mozfest-newser",
      "description": "The MozFest 2013 Newser Badge is special edition badge acknowledging the people who are invested in creating a new future for journalism, working with Mozilla Open News during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-newser.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-newser",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Newser Badge is special edition badge acknowledging the people working with Mozilla Open News during MozFest. It is earned by actively participating in a Source Code for Journalism session track. During these sessions, people design and create next-generation web solutions for journalists. Working among peers, people explore critical issues facing news organizations, hack on new ideas for journalism on the web, make wireframes, work with data visualizations, present new ideas and foster communication between news developers at different news organizations.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Sciencer",
      "shortname": "mozfest-sciencer",
      "description": "The MozFest 2013 Sciencer Badge is special edition badge acknowledging the people who are committed to bringing science and research into an open space, sharing ideas and working with Mozilla Open Science during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-sciencer.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-sciencer",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest 2013 Sciencer Badge is special edition badge acknowledging the people working with Mozilla Open Science during MozFest. It is earned by actively participating in a Science and the Web session track. During these sessions, people examine the potential of an open web to redefine experimentation, analysis and scientific knowledge sharing. Working among their MozFest peers, they explore, experiment and build on others' research, focusing on collaborative tools, open content and partnerships between science and technology.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Mobiler",
      "shortname": "mozfest-mobiler",
      "description": "The MozFest 2013 Mobiler Badge is special edition badge acknowledging the people who are redefining what the mobile web might be, working on mobile experiences during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-mobiler.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-mobiler",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Mobiler Badge is special edition badge acknowledging the people working on mobile experiences during MozFest. It is earned by actively participating in a Webmaking for Mobile session track. During these sessions, people tinker and experiment; they customize the smart phone experience, exploring the vast potential for the mobile open web. Working among peers, people investigate the possibilities of touch interaction, connectivity and device sensors to consider a mobile world without proprietary restrictions..\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Opener",
      "shortname": "mozfest-opener",
      "description": "The MozFest 2013 Opener Badge is special edition badge acknowledging the people working on and with Open Data during MozFest, seeking to find new ways to integrate data in the civic experience.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-opener.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-opener",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Opener Badge is special edition badge acknowledging the people working on and with Open Data. It is earned by actively participating in an Open Data for the Open Web session track. During these sessions, people transform into civic hackers, collaborating with government workers, data activists, and journalists, united in finding ways to access, manage, and create with data. Working among MozFest peers, people liberate and visualize data, creating concrete plans for improving data with the aim of better informing and and organizing communities.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Connector",
      "shortname": "mozfest-connector",
      "description": "The MozFest Connector Badge is special edition badge acknowledging people working with the Hive to kickstart connected learning during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-connector.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-connector",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Connector Badge is special edition badge acknowledging people working with the Hive to kickstart connected learning during MozFest. It is earned by actively participating in a Connect Your City session: helping people explore, make and share. During these sessions, people work with the Hive Global Learning Network to develop engaging, interactive experiences and creating dynamic interactive tools that push the boundaries of digital making. Working among MozFest peers, people connect across disciplines to create collaborative networks of learning, fostering engaging and relevant opportunities for youth.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest WereFox Winner",
      "shortname": "mozfest-werefox-winner",
      "description": "The MozFest 2013 WereFox Winner Badge is special edition, one-of-a-kind badge recognizing superior game playing skill during a specially designed MozFest game.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-werefox-winner.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-werefox-winner",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest WereFox Winner Badge is special edition badge recognizing superior game playing skill during a specially designed MozFest game, played among peers at the Mozilla Festival. This is an official session-specific badge and therefore is particularly prized.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Barista-er",
      "shortname": "mozfest-barista-er",
      "description": "The MozFest 2013 Barista-er Badge is special edition badge recognizing the ability to pull a perfect shot of espresso, draw a beautiful image on foam, and generally keep the MozFest crowd properly caffeinated.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-barista-er.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-barista-er",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest 2013 Barista-er Badge is special edition badge recognizing the ability to pull a perfect shot of espresso, draw a beautiful image on foam, and generally keep the MozFest crowd properly caffeinated. \r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Designer",
      "shortname": "mozfest-designer",
      "description": "The MozFest 2013 Designer Badge is special edition badge acknowledging the people testing and using community created tools to design badges for themselves and others during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-designer.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-designer",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest 2013 Designer Badge is special edition badge acknowledging the people testing and using community created tools to design badges for themselves and others during MozFest. It recognizes the skills of collaborative working, sharing, and building toward an open badges future among peers at MozFest.\r\n\r\nThis skill badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Hacker",
      "shortname": "mozfest-hacker",
      "description": "The MozFest 2013 Hacker Badge is special edition badge acknowledging the people making the phrase \"More hack, less yack\" a reality during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-hacker.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-hacker",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Hacker Badge is special edition badge that acknowledges the people making the phrase \"\"More hack, less yack\"\" a reality during MozFest. It is earned by building a starter project, submitting code, QAing code, prototyping new tools or approaches, and localizing content among peers at the Mozilla Festival.\r\n\r\nThis skill badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Karaoke-er",
      "shortname": "mozfest-karaoke-er",
      "description": "The MozFest 2013 Karaoke-er Badge is special edition badge acknowledging the people committed to enjoying, singing, and sharing their musical preferences among large crowds at MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-karaoke-er.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-karaoke-er",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest 2013 Karaoke-er Badge is special edition badge acknowledging the people committed to enjoying, singing, and sharing their musical preferences, regardless of how hokey they might be, among the large crowds at MozFest.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Watcher",
      "shortname": "mozfest-watcher",
      "description": "The MozFest 2013 Watcher Badge is special edition badge acknowledging the people working on exposing issues of online tracking and data trails.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-watcher.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-watcher",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Watcher Badge is special edition badge acknowledging the people working on exposing issues of online tracking and data trails. It is earned by actively participating in a Look Who's Watching session track. During these sessions, people learn who follows you online, discuss access points and the meaning of this type of tracking, and consider issues of data privacy. Working among MozFest peers, people create data visualizations illustrating who's tracking whom, learn to control who can see what happens online, use innovative tools to address questions of personal data privacy and work to forge long term solutions for privacy on the web.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Reveler",
      "shortname": "mozfest-reveler",
      "description": "The MozFest 2013 Reveler Badge is special edition badge acknowledging a personal commitment to forging the future of the web during MozFest: working with peers to imagine and build an open future of learning, making, journalism, data, science, privacy, and mobile.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-reveler.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-reveler",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Reveler Badge is special edition badge acknowledging a special commitment to forging the future of the web. It is earned by actively participating during MozFest: working, creating and sharing together among peers. Collectively imagining and building toward an open future of learning, making, journalism, data, science, privacy, and mobile.\r\n\r\nThis attendance badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    },
    {
      "name": "MozFest Gamer",
      "shortname": "mozfest-gamer",
      "description": "The MozFest 2013 Gamer Badge is special edition badge acknowledging the people who design and build open game experiences in new and innovative ways, working with Mozilla Open Games during MozFest.",
      "prerequisites": [],
      "image": "http://badger.openbadges.org/badge/image/mozfest-gamer.png",
      "criteria": "http://badger.openbadges.org/badge/criteria/mozfest-gamer",
      "tags": [],
      "categories": [],
      "ageRange": [],
      "rubric": {
        "items": [
          {
            "text": "Satisfies the following criteria:\nThe MozFest Gamer Badge is special edition badge acknowledging the people working with Mozilla Open Games during MozFest. It is earned by actively participating in an Open Games: Ready, Set, Go! session track. During these sessions people create and play, and imagine the next generation of games. Working among MozFest peers, people reinvent the web as a platform for open games, hacking on code, sharing ideas, prototyping examples and advancing new concepts of fun.\r\n\r\nThis participation badge was earned at the 2013 Mozilla Festival in London, England.",
            "required": true
          }
        ]
      },
      "program": "bda68a0b505bc0c7cf21bc7900280ee74845f693",
      "owner": DEMO_OWNER
    }
  ];

  var demoBadges = Badges.find({owner: DEMO_OWNER});
  if(demoBadges.count() == 0) {
    arr.forEach(function(badge){ 
      badge.cachedImage = badge.image;
      badge.issuer = {
        name: 'Open Badges',
        url: 'http://openbadges.org'
      };
      Badges.insert(badge);
    });
  }
  /*
  else {
    // One-time update of the demo badges
    demoBadges.fetch().forEach(function(badge){ 
      badge.issuer = {
        name: 'Open Badges',
        url: 'http://openbadges.org'
      };
      Badges.upsert(badge._id, badge);
    });
  }
  */

});