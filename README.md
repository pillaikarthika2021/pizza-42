# PIZZA42 - An Awesome Pizza ordering application using Auth0

Hi, Welcome to **Pizza42**!

Pizza42 is an application which takes you to an exclusive futuristic store. Futuristic because it is robot run Pizza store. And that's exactly why we have a very specific customized limited menu which is named after all special robots you might have encountered in your life (also one human being too, he made it to that list).

Our reference to 42 is from the famous "**The Hitchhiker's Guide to the Galaxy**", a _trilogy_ in five parts,. In this novel, **Deep thought** a supercomputer takes 7.5 million years to compute the *answer to life, universe and everything* and gives a response as **42**. However, the answer was meaningless as the question was meaningless to a machine, which leads to creating a more powerful computational machine that is indeed the planet **Earth**. *[Link to refer rest of the story](https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy)*

Coming back to the project Pizza42, we are robot run store and that's why robots need to know that there users are real **humans**. For the same purpose we have used a very interesting provider that has facilitated this process.

**Auth0** provides a cloud based one stop solution for *Identity and Access Management* for Pizza42. The Auth0 API allows a user (new customer) to sign up and create a profile either using an email address or using a social identity provider such as Google, also allows the existing users to log in to their profile. Once they login, Pizza42 requires its customers to have a verified email address before they can order a Pizza. Auth0 instantly sends them a verification email after sign up and they can successfully do that.
We have also used Auth0 Management API which uses JWTs for authenticating customer requests and granting access to certain actions they asked for. This is in order to let the customer access their profile, view their information such as name, email, profile picture, past orders.

# Lets Get Started: 

**Run it locally**
-   npm install
  
-   npm start
    
-   The application will be served at  `http://localhost:4200`

**Hosted on Azure**
https://pizza.centralus.cloudapp.azure.com/

## UML diagram


```mermaid
sequenceDiagram
User->> Pizza42: I want to order a Pizza!
Pizza42->>Auth0: Calling Auth0 API
Auth0->>Pizza42: Log in or Sign Up!
Pizza42->> User: Log in or Sign Up!
User->> Pizza42: Sign up using Google/ Login (existing user)
User->> Pizza42: I want to order a Pizza!
Pizza42->>Auth0: Check user verified before ordering
Auth0->>Pizza42: Yes, email verified, Buy Now activated
Pizza42->> User: Ready to Place order/ show Buy Now!
User->> Pizza42: I want to check past orders on my account!
Pizza42->>Auth0: Calling Auth0 Management API
Auth0->>Pizza42: Return user_metadata(orders history)
Pizza42->> User: Show user history


https://ibb.co/qC8279P


```
```

# Pizza42
meant to be a robotic pizza cooking and delivery service project using Auth0 and Express JS API to talk to Angular Frontend

