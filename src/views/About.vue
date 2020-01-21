<template lang="pug">
  .c-about
    h1 Favorite Books
    p My first impression is, I like the idea to create a personal favorite book list. I think it is a great feature for the user.
    p There are now two directions which I started to think about. One is what about the design with all the UI/UX and the second will be the architecture how to implement the functionality into the page.
    p My thoughts about the design will be where the button to favorite a book will take place? Will be the new favorite button only on the book page or also on a book cover at the category page too? Looks the favorite page like a category page? (Could be, then the implementation should be easy when we say that „favorites books“ are an own category. ) Will be an animation by click on the favorite button? How it will look like? Like a heart or an own Blinkist symbol to symbolize a favorite book. Should the user use the same button to unfavorite the book when he changed his mind? Or is there a functionality to „unfavorite“ a book?
    p From the architecture perspective I will start think about the way how we can implement the new functionality. First idea is to set up an own table in the database for favorite books which has as properties user id and book id (like a N:M relationship). So should be it very easy to grab the favorite books for every user. The further consideration of my team member about „Right now most of our users only use a single device.“ Let me think also about a complete different solution. When the user only use one device it is possible to store the data of favorite books in a local storage (means local on the device). Is a bit dangerous because it can be deleted by the user but very easy to implement. It makes sense to implement a little microservice to favorite, unfavorite a book and get all favorite books for a user. Make it easier to implement it wherever we want the functionality.
    p Other ideas or thoughts about the Ticket:
    ul
      li Is this needed to have a dedicated page for favorite books? Maybe we can implement a global filter on all pages to show only favorites in the existing pages.
      li Have a favorite icon/button not only at the book page. Maybe on the top right corner of every book. Make it very easy to check for the user if a book is his favorite list before click on the book to open the book page.
      li Starting with a little easy prototype as an A/B test to check if the user want the new functionality. Comes from further consideration in the ticket „We don’t know for sure if people really like this feature.“.
      li We can use the functionality for favorites books also on other pages like our start page for the user. There we can ask the user to read one of his favorites books again or the first time.
      li We can use the favorite books to create a recommendation engine between different users. When someone like book A, book B and book C and another user like book A and book B we can recommend him book C.
    p
      | At the beginning to check if the user are interested in this new feature product manager and designer can create surveys on the website/social media or newsletter to get feedback from our existing or maybe new users.
      | The next steps in the lifecycle should be for me a kick off meeting for this topic arranged by the product manager. In this meeting we should talk about the first MVP and define the minimum valuable product with his features. Now we can decide as team how we want to go on. My advice would be that developer and designer sitting together and create a fast prototype together with simple codebase to have something real for internal user tests. After some rounds of optimization the developer should start to finalize and make the codebase stable. When this is ready we can roll out the new feature as A/B test to 10% of our users or ask for free volunteers from our user base. We can give little benefits to them for real feedback. After the first feedback we will decide how the next „feature round“ will go on. If we need new features for our favorite feature is ready to go live completely. In the end this will take now some Sprints to work and develop the new feature complete to 100%. During this sprints product manager, designer and developer will sit together in regular meetings and talk about results. From Sprint to sprint the team can decide if the percentage of users for the new feature will grow from 10% to 20% and so on.
    p The responsibilities during the process should be that the product manager describe and document all things which was discussed and decided in team meetings, feedback from users and maybe surveys. The product manager should be hidden champion in the team to prepare everything that the creative people from the design and develop team can do „magic“ things. He or she should be never lost the picture with the main focus and calm down from time to time the creative people (designer, developer) when they start thinking in too many directions and in crazy ideas.
    p The designer should be working hand in hand with the developer (frontend).  The workflow of design and frontend should be very close. At this it should also possible that developers should implement something without design and let check this later from a designer to approve the new design. That makes the workflow much faster, flexible and more creative when both sides working on the design.
    p The developer are responsible that the code is stable. That means it should be modular and tested. Modulation for the flexibility for change requests or also new feature requests. And of course tested to be stable at changes and new implementations.
    p In the end the whole process should be fun for the whole team. Everyone must be know the main goal and what is the focus about. User feedbacks, statistics and every result which changed the new feature should shared with the whole team, that everyone have the feeling to be a part of the new feature and the main goal.
    p
      | Because I have a huge hand-on mentality, I created something very fast which you can see and test &nbsp;
      a(href="/") here
      | .
</template>

<style lang="scss">
.c-about {
  width: 50%;
  text-align: left;
  margin: 0 auto;
}
</style>
