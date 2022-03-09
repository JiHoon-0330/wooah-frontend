import { REELS_API } from "../../types/reels/reelsApi";

const dataReels = {
  data: [
    {
      body: "Wavy~😎\n\n#wooah #우아 \n#NANA #WOOYEON #SORA #LUCY #MINSEO\n#나나 #우연 #소라 #루시 #민서\n#dance #tiktok #reels\n#wavy",
      createdAt: 1646569885,
      poster:
        "https://instagram.ficn3-4.fna.fbcdn.net/v/t51.2885-15/275113046_1309841556182050_6302971331610823066_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=RL6OX8XFex8AX_ZfiD0&edm=ACHbZRIBAAAA&ccb=7-4&ig_cache_key=Mjc4Nzk1MjU3NTcxNjI2NTYyMA%3D%3D.2-ccb7-4&oh=00_AT9t-v9Du5iXghANzr6Uk3DwX55PYp-JTCBkk-Ag0Etxag&oe=62277B8F&_nc_sid=4a9e64",
      src: "https://instagram.ficn3-4.fna.fbcdn.net/v/t50.2886-16/275057827_1191100508091141_1847729511452633014_n.mp4?_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=0wW1K0cg9WoAX-jNaRr&edm=ACHbZRIBAAAA&ccb=7-4&oe=622753A6&oh=00_AT-sVKpHalqjh4ztYxR135IUT1mFChZBy8mjsSW4PRpXXQ&_nc_sid=4a9e64",
    },
    {
      body: "나나는 못말려!🤣🐰💕\n\n#wooah #우아 \n#NANA #WOOYEON #SORA #LUCY #MINSEO\n#나나 #우연 #소라 #루시 #민서\n#dance #tiktok #reels\n#짱구",
      createdAt: 1646388006,
      poster:
        "https://instagram.ficn3-3.fna.fbcdn.net/v/t51.2885-15/275094317_1308865166259673_6063774576242228829_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=1&_nc_ohc=VRGipvFOrQcAX-K29Wv&edm=ACHbZRIBAAAA&ccb=7-4&ig_cache_key=Mjc4NjQyNjcxMTc2MTQ4MTE4MQ%3D%3D.2-ccb7-4&oh=00_AT8sgcXQ3aSe2BJ9ndqdJ2XRmOmTwlIQ2lUcJFCNE_5IBw&oe=62278634&_nc_sid=4a9e64",
      src: "https://instagram.ficn3-4.fna.fbcdn.net/v/t50.2886-16/274983889_1395618594215129_4911770755558927380_n.mp4?_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=cMYSEpvcsogAX8ommb6&edm=ACHbZRIBAAAA&ccb=7-4&oe=6226E217&oh=00_AT-Q4N8Ax0RPCsE-KHRkXxdktydPKpLK5rblEhdRKQx4HQ&_nc_sid=4a9e64",
    },
    {
      body: "😎\n\n#wooah #우아 \n#NANA #WOOYEON #SORA #LUCY #MINSEO\n#나나 #우연 #소라 #루시 #민서\n#dance #tiktok #reels",
      createdAt: 1646204903,
      poster:
        "https://instagram.ficn3-3.fna.fbcdn.net/v/t51.2885-15/274948058_502078621266072_2076926592811801144_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=1&_nc_ohc=eaVHrjxO7GQAX9LFqQk&edm=ACHbZRIBAAAA&ccb=7-4&ig_cache_key=Mjc4NDg5MDgyNzczODMwODE3OQ%3D%3D.2-ccb7-4&oh=00_AT8qBid78BhBG0mNQWf7-mQfLYLBu8kjRAq3IH-XUAUqqg&oe=622764AF&_nc_sid=4a9e64",
      src: "https://instagram.ficn3-3.fna.fbcdn.net/v/t50.2886-16/275103839_533485154695372_4337032259050941939_n.mp4?_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=104&_nc_ohc=gOjTlQlC-ssAX8evsqU&edm=ACHbZRIBAAAA&ccb=7-4&oe=62273415&oh=00_AT9-M01dI6OaoLqm0MvQJ61-A_YFUrkXXdFdOat-B2zMwA&_nc_sid=4a9e64",
    },
    {
      body: "우정테스트💕\n\n#wooah #우아",
      createdAt: 1645882105,
      poster:
        "https://instagram.ficn3-3.fna.fbcdn.net/v/t51.2885-15/274627927_321224746503169_7783284357921256829_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ANK-i1Mq85cAX9TjiAQ&edm=ACHbZRIBAAAA&ccb=7-4&ig_cache_key=Mjc4MjE4MjMwNDU1OTk1ODcyNA%3D%3D.2-ccb7-4&oh=00_AT_Ew7mJYqVU2xCaguw37k9vDh-2uNXnV3_J8-GRPgdm6g&oe=6228035D&_nc_sid=4a9e64",
      src: "https://instagram.ficn3-3.fna.fbcdn.net/v/t50.2886-16/274698385_3138411643094594_6853197398247348343_n.mp4?_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=9xlgtmlcZKMAX9lfks1&edm=ACHbZRIBAAAA&ccb=7-4&oe=622740F9&oh=00_AT924_91Eru0FlAF583ylaYTAZvX7tAfJv1wH7H2w2gbZA&_nc_sid=4a9e64",
    },
    {
      body: "#wooah #우아 \n#NANA #WOOYEON #SORA #LUCY #MINSEO\n#나나 #우연 #소라 #루시 #민서",
      createdAt: 1645710986,
      poster:
        "https://instagram.ficn3-3.fna.fbcdn.net/v/t51.2885-15/274618165_108144691808501_5411152126764999348_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ficn3-3.fna.fbcdn.net&_nc_cat=1&_nc_ohc=5Kv2qxhPhyMAX8IF4oJ&edm=ACHbZRIBAAAA&ccb=7-4&ig_cache_key=Mjc4MDc0NzM5NjEwOTQ0NjkyMg%3D%3D.2-ccb7-4&oh=00_AT_tle7BE5rdJxBhJmsfjTKXJ_BVwE4c3TAl5i8UdCxLaw&oe=62285CC4&_nc_sid=4a9e64",
      src: "https://instagram.ficn3-4.fna.fbcdn.net/v/t50.2886-16/274564239_159837003056206_3933553731138243434_n.mp4?_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=S2ygu9Fh8BUAX_XpQV8&edm=ACHbZRIBAAAA&ccb=7-4&oe=6227002A&oh=00_AT9iUg4FzjwAEy2G5NzbTm9RuX5za9twZSR8GV0zUwtugg&_nc_sid=4a9e64",
    },
  ],
  max_id:
    "QVFDTDRQVXozbUhDUUYwUHpmRzVSX3JkdnVLTWV1RnA3MkpoSDZOOTkwNnY1MUt5cEN1SExJMVhRZ3c1alRRMlN3aFRXR01nb01YcXNlUkNLYmk1dWpVSg==",
  more_available: true,
};

export default dataReels as REELS_API["GET REELS_POST /instagram/reels"]["return"];
