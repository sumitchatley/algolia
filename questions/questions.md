*Question 1*: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records: A record is an object you add to an index and want to search for. It can contain any number of attributes such as price, brand category etc. An example of record is
{
  "name": "Iphone 6 64Gb",
  "brand": "Apple",
  "color": "Gold",
  "categories": ["smartphone", "phone", "electronics"],
  "price": 789
}

Indexing: Index is the equivalent for search of what a “table” is for a database. Unlike a database table, an index is optimized for search operations.

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."
Metrics that can enhance customer's search by displaying most relevant products at the top.
In the given data source for example: 
1. Rating can be one metric. It makes more sense to show highly rated product at the top.
2. Popularity can be another metric. As popularity can have many distinct values i.e. Cardinality, We can bucket it to have 10 possible values. 0-1000,1001-2000, and 9000-10000 (10 distinct values)
We can use multiple metrics for custom ranking.

Cheers, George

--

*Question 2*: Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt
T


We are really sorry to hear about your bad experience. Currently, our UI allows to select the select multuple indexes and delete all of them at once. However, our teams are constantly working on to make user's experience better each day.
--

*Question 3*: Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

You can integrate Algolia in your website with just 4 steps.
Send data to server – to ensure users get fastest discovery experience. You can send data via API client or can directly upload. You need to select your index/table and send data to Alogia in JSON format.
Configure relevance – to give best search results to users. To improve relevance, you just need to configure two setting Searchable attributes and custom ranking. 
Build a Search UI - to provide great search experience to users. This can be coded with one of the instant search libraries which provides fully customizable front-end widgets that you can quickly assemble into your unique search interface.
Iterate – You can configure analytics to get insights into searches performance to make reform changes.

Regards, Leo