# Expose
**User Roles:**

1. Artist: Users who create and share artistic content on the video streaming website.
2. Everyday User: Users who consume and engage with artistic content on the video streaming website.

**User Personas:**

1. Artist Persona 1:
   - Name: Sophia Ramirez
   - Location: Los Angeles, California
   - Age: 28
   - Technology Access: Proficient with technology, primarily uses a computer.
   - Frequency of Access: Uploads content regularly, visits the website daily to interact with the community.
   - Motivation: Sophia is a singer-songwriter who wants to share her original music and connect with her fans. She seeks a platform to showcase her talent and gain exposure for potential collaborations or music industry opportunities.
   - Pain Points: Limited visibility and difficulty reaching her target audience, lack of monetization options.

2. Artist Persona 2:
   - Name: Kwaku Boahen
   - Location: Accra, Ghana
   - Age: 35
   - Technology Access: Proficient with technology, primarily uses a smartphone.
   - Frequency of Access: Uploads content occasionally, visits the website several times a week to engage with the community and learn from other artists.
   - Motivation: Kwaku is a self-taught street artist who wants to share his artwork and techniques with a wider audience. He seeks inspiration from other artists and hopes to receive feedback and constructive criticism to improve his skills.
   - Pain Points: Limited resources for learning and collaboration, language barriers for engaging with artists from different regions.

3. Everyday User Persona 1:
   - Name: Emily Johnson
   - Location: New York City, USA
   - Age: 22
   - Technology Access: Highly proficient with technology, uses a smartphone and laptop.
   - Frequency of Access: Visits the website daily during leisure time, primarily in the evenings.
   - Motivation: Emily is a passionate art enthusiast who enjoys exploring various forms of artistic expression. She seeks a platform that offers a diverse range of content, curated recommendations, and an engaging community to connect with like-minded individuals.
   - Pain Points: Difficulty finding new and lesser-known artists, overwhelming content discovery experience.

4. Everyday User Persona 2:
   - Name: David Thompson
   - Location: London, UK
   - Age: 40
   - Technology Access: Moderate proficiency with technology, primarily uses a tablet.
   - Frequency of Access: Visits the website a few times a week to unwind and discover new art forms.
   - Motivation: David is an art lover who appreciates traditional and contemporary art. He seeks a platform that provides a user-friendly experience to explore diverse artistic content, learn about different cultures, and stay updated with the latest trends in the art world.
   - Pain Points: Limited time for extensive exploration, difficulty finding specific content based on personal preferences.

**User Stories:**

1. As an artist, I want to create a profile and start a live stream of artistic videos, so that I can share my work with a wider audience.
2. As an everyday user, I want to easily search and discover new artists and art forms, so that I can expand my artistic knowledge and appreciation.
3. As an artist, I want to receive comments and feedback on my  streams and videos, so that I can improve my skills and connect with my audience.
4. As an everyday user, I want to bookmark and save my favorite videos, so that I can easily access and revisit them later.
5. As an artist, I want to have monetization options, such as ad revenue or sponsorship opportunities, so that I can generate income from my artistic content.
6. As an everyday user, I want personalized recommendations based on my viewing history and preferences, so that I can discover content tailored to my interests.
7. As an artist, I want to collaborate with other artists on creative projects, so that we can collectively produce unique and compelling content.
8. As an everyday user, I want to engage in discussions and forums related to artistic topics, so that I can connect with fellow art enthusiasts and share my thoughts.
9. As an artist, I want to track the performance of my videos, including views, likes, and comments, so that I can gauge audience engagement and measure the impact of my work.
10. As an everyday user, I want to receive notifications about new releases from my favorite artists, so that I can stay updated and never miss their latest creations.


API Routes
User Routes:
GET /users: Retrieve a list of all users.
POST /users: Create a new user.
GET /users/:id: retrieve information about a specific user
PUT /users/:id: update information for a specific user.
GET /users/:id/followers: Retrieve a list of followers for the user with the specific “:id”.
GET /users/:id/following: Retrieve a list of users that the user with the specific “:id” is following.
 POST /users/:id/followers/:followerId: Create a new follower relationship between the user with the specified “:id” and the user with the “:followerId”
 DELETE /users/:id/followers/:followerId: Remove the follower relationship between the user with the specified “:id” and the user with the “:followerId
DELETE /users/:id: Delete a specific user.
Live Stream Routes:
GET /livestreams : Retrieve a list of all live streams.
POST /livestreams: Start a new live stream.
GET /livestreams/:id: Retrieve information about a specific live stream.
PUT /livestreams/:id: Update information for a specific livestream.
DELETE /livestreams/:id: End a specific live stream.
GET /livestreams/:id/comments: Retrieve the comments for a specific live stream..
POST /livestreams/:id/comments: Add a new comment to a specific live stream


Video Routes:
GET /videos : retrieve a list of all videos.
POST /videos: Create a new video.
GET /videos/:id: Retrieve information about a specific videos
PUT /videos/:id: Update information for a specific video.
DELETE /videos/:id: Delete a specific video
GET /videos/:id/comments: Retrieve the comments for a specific video.
POST /videos/:id/comments: Add a new comment to a specific video.
PUT /videos/:id/like: Like a specific video
PUT /videos/:id/dislike: Dislike a specific video.

Category Routes:
GET /categories: Retrieve a list of all categories.
POST /categories: Create a new category.
GET /categories/:id: Retrieve information about a specific category
PUT /categories/:id: Update information for a specific category.
DELETE /videos/:id: Delete a specific category

Subscription Routes:
GET /subscriptions: Retrieve a list of all subscriptions.
POST /subscriptions: Subscribe to a user’s channel
DELETE /subscriptions/:id: Unsubscribe  from a user’s channel


