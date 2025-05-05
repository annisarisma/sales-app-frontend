import user1 from '/assets/images/avatar/user-1.png'
import user2 from '/assets/images/avatar/user-2.png'
import user3 from '/assets/images/avatar/user-3.png'
import user4 from '/assets/images/avatar/user-4.png'
import user5 from '/assets/images/avatar/user-5.png'
import user6 from '/assets/images/avatar/user-6.png'
import user7 from '/assets/images/avatar/user-7.png'
import user8 from '/assets/images/avatar/user-8.png'
import user9 from '/assets/images/avatar/user-9.png'
import user10 from '/assets/images/avatar/user-10.png'
import user11 from '/assets/images/avatar/user-11.png'
import user12 from '/assets/images/avatar/user-12.png'
import user13 from '/assets/images/avatar/user-13.png'
import user14 from '/assets/images/avatar/user-14.png'
import user15 from '/assets/images/avatar/user-15.png'
import user16 from '/assets/images/avatar/user-16.png'
import user17 from '/assets/images/avatar/user-17.png'
import user18 from '/assets/images/avatar/user-18.png'
import user19 from '/assets/images/avatar/user-19.png'
import user20 from '/assets/images/avatar/user-20.png'
import user21 from '/assets/images/avatar/user-21.png'
import user22 from '/assets/images/avatar/user-22.png'
import user23 from '/assets/images/avatar/user-23.png'
import user24 from '/assets/images/avatar/user-24.png'
import user25 from '/assets/images/avatar/user-25.png'
import user26 from '/assets/images/avatar/user-26.png'
import user27 from '/assets/images/avatar/user-27.png'
import user28 from '/assets/images/avatar/user-28.png'

const reviewsData = [
  {
    image: user1,
    userName: 'John Doe',
    location: 'New York',
    star: '4.5',
    date: '24 May, 2024',
    title: 'Code Quality',
    content:
      'Was a really good move to add this as part of our project, we had great comments from the business regarding design and user experience. Install with no dependency issues or deprecated packages and was really good overall.',
  },
  {
    image: user2,
    userName: 'Jane Smith',
    location: 'Los Angeles',
    star: '5',
    date: '22 May, 2024',
    title: 'Documentation Quality',
    content:
      'Excellent product! Exceeded all my expectations. Highly recommend to anyone looking for quality.',
  },
  {
    image: user3,
    userName: 'Michael Brown',
    location: 'Chicago',
    star: '3.5',
    date: '20 May, 2024',
    title: 'Design Quality',
    content:
      'The product is decent but has some room for improvement. The installation was smooth, but some features were a bit underwhelming.',
  },
  {
    image: user4,
    userName: 'Emily Davis',
    location: 'Houston',
    star: '2',
    date: '18 May, 2024',
    title: 'Flexibility',
    content:
      'Not very satisfied with the product. It did not meet my expectations and had several issues during installation.',
  },
  {
    image: user5,
    userName: 'Chris Wilson',
    location: 'Phoenix',
    star: '4',
    date: '15 May, 2024',
    title: 'Code Quality',
    content:
      'Good product overall, but there are a few bugs that need to be addressed. Customer support was helpful in resolving some issues.',
  },
  {
    image: user6,
    userName: 'Sarah Lee',
    location: 'San Francisco',
    star: '4.5',
    date: '12 May, 2024',
    title: 'Customizability',
    content:
      'Great product with excellent features. The user interface is very intuitive and easy to navigate.',
  },
  {
    image: user7,
    userName: 'David Johnson',
    location: 'Miami',
    star: '3.5',
    date: '10 May, 2024',
    title: 'Code Quality',
    content:
      'The product is average. It works as expected but lacks some advanced features that competitors offer.',
  },
  {
    image: user8,
    userName: 'Nancy Adams',
    location: 'Seattle',
    star: '4.5',
    date: '8 May, 2024',
    title: 'Design Quality',
    content:
      "Had some issues with the product initially, but customer support was able to help resolve them. Still, it's not as seamless as I hoped.",
  },
  {
    image: user9,
    userName: 'Paul White',
    location: 'Boston',
    star: '3.5',
    date: '5 May, 2024',
    title: 'Feature Availability',
    content:
      'The product did not meet my expectations at all. It was difficult to install and had many bugs.',
  },
  {
    image: user10,
    userName: 'Lisa Green',
    location: 'Denver',
    star: '5',
    date: '3 May, 2024',
    title: 'Design Quality',
    content:
      'Absolutely fantastic product! It has all the features I need and works flawlessly.',
  },
  {
    image: user11,
    userName: 'James Clark',
    location: 'Atlanta',
    star: '5',
    date: '1 May, 2024',
    title: 'Feature Availability',
    content:
      "Overall, I'm happy with the product. It performs well and has a good range of features.",
  },
  {
    image: user12,
    userName: 'Patricia Martinez',
    location: 'Dallas',
    star: '4.5',
    date: '28 April, 2024',
    title: 'Flexibility',
    content:
      'The product is good but could use some improvements. The user interface could be more user-friendly.',
  },
  {
    image: user13,
    userName: 'Charles Brown',
    location: 'Orlando',
    star: '1',
    date: '25 April, 2024',
    title: 'Code Quality',
    content:
      "I had high hopes for this product, but it didn't deliver as expected. There were several issues that made it difficult to use.",
  },
  {
    image: user14,
    userName: 'Mary Johnson',
    location: 'Philadelphia',
    star: '4',
    date: '22 April, 2024',
    title: 'Feature Availability',
    content:
      'Overall, a good product. It has most of the features I need and works well.',
  },
  {
    image: user15,
    userName: 'Richard Wilson',
    location: 'San Diego',
    star: '3.5',
    date: '20 April, 2024',
    title: 'Design Quality',
    content:
      "Decent product, but the design could be more modern. It's a bit outdated.",
  },
  {
    image: user16,
    userName: 'Karen Taylor',
    location: 'Las Vegas',
    star: '2.5',
    date: '18 April, 2024',
    title: 'Flexibility',
    content:
      "Not very flexible. It's difficult to customize according to our needs.",
  },
  {
    image: user17,
    userName: 'Daniel Thomas',
    location: 'Austin',
    star: '4',
    date: '15 April, 2024',
    title: 'Documentation Quality',
    content: 'Good documentation. It helped us understand the product better.',
  },
  {
    image: user18,
    userName: 'Barbara Hernandez',
    location: 'San Antonio',
    star: '3',
    date: '12 April, 2024',
    title: 'Feature Availability',
    content:
      'Lacking some features we expected. It needs more customization options.',
  },
  {
    image: user19,
    userName: 'Matthew Martinez',
    location: 'Charlotte',
    star: '4.5',
    date: '10 April, 2024',
    title: 'Flexibility',
    content:
      'Very flexible product. We were able to customize it according to our needs.',
  },
  {
    image: user20,
    userName: 'Amanda Young',
    location: 'San Jose',
    star: '5',
    date: '8 April, 2024',
    title: 'Code Quality',
    content:
      "Excellent code quality. It's well-structured and easy to maintain.",
  },
  {
    image: user21,
    userName: 'Robert Lopez',
    location: 'Indianapolis',
    star: '3',
    date: '5 April, 2024',
    title: 'Documentation Quality',
    content:
      'Documentation could be improved. It lacks some details and examples.',
  },
  {
    image: user22,
    userName: 'Dorothy Gonzalez',
    location: 'Jacksonville',
    star: '4.5',
    date: '3 April, 2024',
    title: 'Design Quality',
    content: "Great design! It's visually appealing and easy to navigate.",
  },
  {
    image: user23,
    userName: 'Joseph Perez',
    location: 'San Francisco',
    star: '4',
    date: '1 April, 2024',
    title: 'Flexibility',
    content:
      'Flexible enough for our needs. We were able to customize it to fit our workflow.',
  },
  {
    image: user24,
    userName: 'Donna Flores',
    location: 'Columbus',
    star: '2',
    date: '29 March, 2024',
    title: 'Feature Availability',
    content:
      'Lacks some important features we were looking for. Disappointing.',
  },
  {
    image: user25,
    userName: 'Kenneth Scott',
    location: 'Fort Worth',
    star: '4.5',
    date: '27 March, 2024',
    title: 'Design Quality',
    content: "The design is top-notch! It's clean, modern, and intuitive.",
  },
  {
    image: user26,
    userName: 'Jennifer King',
    location: 'Memphis',
    star: '3',
    date: '24 March, 2024',
    title: 'Feature Availability',
    content:
      'Average feature set. It meets our basic needs but lacks advanced functionality.',
  },
  {
    image: user27,
    userName: 'Gerald Hernandez',
    location: 'Baltimore',
    star: '4',
    date: '22 March, 2024',
    title: 'Documentation Quality',
    content:
      'Good documentation. It helped us get started with the product quickly.',
  },
  {
    image: user28,
    userName: 'Megan Sanchez',
    location: 'Washington',
    star: '4.5',
    date: '20 March, 2024',
    title: 'Code Quality',
    content: "High-quality codebase. It's well-written and easy to understand.",
  },
]
export default reviewsData
