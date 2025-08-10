import Book_1 from '../../Assets/Book_1.jpg';
import Book_2 from '../../Assets/Book_2.webp';
import Book_3 from '../../Assets/Book_3.webp';
import Book_4 from '../../Assets/Book_4.webp';
import Book_5 from '../../Assets/Book_5.webp';
import Book_6 from '../../Assets/Book_6.webp';
import Book_7 from '../../Assets/Book_7.webp';
import Book_8 from '../../Assets/Book_8.webp';
import Book_9 from '../../Assets/Book_9.webp';
import Book_10 from '../../Assets/Book_10.webp';
import Book_11 from '../../Assets/Book_11.webp';
import Book_12 from '../../Assets/Book_12.webp';
import Book_13 from '../../Assets/Book_13.webp';
import Book_14 from '../../Assets/Book_14.webp';
import Book_15 from '../../Assets/Book_15.webp';
import Book_16 from '../../Assets/Book_16.webp';
import Book_17 from '../../Assets/Book_17.webp';
import Book_18 from '../../Assets/Book_18.webp';
import Book_19 from '../../Assets/Book_19.webp';
import Book_20 from '../../Assets/Book_20.webp';
import Book_21 from '../../Assets/Book_21.webp';
import Book_22 from '../../Assets/Book_22.webp';
import Book_23 from '../../Assets/Book_23.webp';
import Book_24 from '../../Assets/Book_24.webp';
import Book_25 from '../../Assets/Book_25.webp';
import Book_26 from '../../Assets/Book_26.webp';
import Book_27 from '../../Assets/Book_27.webp';
import Book_28 from '../../Assets/Book_28.webp';
import Book_29 from '../../Assets/Book_29.webp';
import Book_30 from '../../Assets/Book_30.webp';
import Book_31 from '../../Assets/midnight-library.webp';
import Book_32 from '../../Assets/atomic-habits.webp';
import Book_33 from '../../Assets/the-alchemist.webp';
import Book_34 from '../../Assets/The-Day-You-Begin.webp';
import Book_35 from '../../Assets/the-monster.webp';
import Book_36 from '../../Assets/the-silent-patient.webp';
import Book_37 from '../../Assets/it-ends-with-us.webp';
import Book_38 from '../../Assets/rich-dad-poor-dad.webp';
import Book_39 from '../../Assets/ikigai.webp';
import Book_40 from '../../Assets/think-like-a-monk.webp';
import Book_41 from '../../Assets/EditorsPick1.webp';
import Book_42 from '../../Assets/EditorsPick2.webp';
import Book_43 from '../../Assets/EditorsPick3.webp';


const booksData = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: Book_1,
    price: 345.99,
    rating: 4.3,
    description: "A classic tale of the Jazz Age, exploring themes of decadence, idealism, and social upheaval.",
    reviews: [
      { id: 1, reviewer: "Alice", comment: "A beautifully written masterpiece.", rating: 5 },
      { id: 2, reviewer: "Bob", comment: "Great portrayal of the 1920s.", rating: 4 },
      { id: 3, reviewer: "Charlie", comment: "Loved the complex characters.", rating: 4 },
      { id: 4, reviewer: "Diana", comment: "A bit slow but worth it.", rating: 3 },
      { id: 5, reviewer: "Ethan", comment: "Highly recommend to literature lovers.", rating: 5 },
    ],
      category: 'collection'

  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: Book_2,
    price: 399.99,
    rating: 4.8,
    description: "A powerful story about racial injustice and childhood innocence in the Deep South.",
    reviews: [
      { id: 1, reviewer: "Fiona", comment: "Emotionally gripping and thought-provoking.", rating: 5 },
      { id: 2, reviewer: "George", comment: "A must-read classic.", rating: 5 },
      { id: 3, reviewer: "Helen", comment: "Loved Scout’s perspective.", rating: 5 },
      { id: 4, reviewer: "Ivan", comment: "Important social themes beautifully portrayed.", rating: 4 },
      { id: 5, reviewer: "Jill", comment: "One of the best books I’ve read.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    image: Book_3,
    price: 410.50,
    rating: 4.6,
    description: "A dystopian novel about totalitarianism, surveillance, and the loss of individuality.",
    reviews: [
      { id: 1, reviewer: "Karen", comment: "Disturbingly relevant.", rating: 5 },
      { id: 2, reviewer: "Leo", comment: "A chilling portrayal of a controlled society.", rating: 5 },
      { id: 3, reviewer: "Mona", comment: "Thought-provoking and intense.", rating: 4 },
      { id: 4, reviewer: "Nate", comment: "A bit dark but important.", rating: 4 },
      { id: 5, reviewer: "Olivia", comment: "Orwell was ahead of his time.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    image: Book_4,
    price: 320.75,
    rating: 4.5,
    description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
    reviews: [
      { id: 1, reviewer: "Paul", comment: "Witty and charming.", rating: 5 },
      { id: 2, reviewer: "Quincy", comment: "Austen’s best work.", rating: 5 },
      { id: 3, reviewer: "Rachel", comment: "Loved Elizabeth Bennet’s character.", rating: 4 },
      { id: 4, reviewer: "Sam", comment: "Great romantic and social commentary.", rating: 4 },
      { id: 5, reviewer: "Tina", comment: "Timeless story with humor.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    image: Book_5,
    price: 315.25,
    rating: 4.0,
    description: "A story about teenage angst and alienation narrated by Holden Caulfield.",
    reviews: [
      { id: 1, reviewer: "Uma", comment: "Relatable and raw.", rating: 4 },
      { id: 2, reviewer: "Vikram", comment: "Unique voice and style.", rating: 4 },
      { id: 3, reviewer: "Wendy", comment: "Sometimes frustrating but honest.", rating: 3 },
      { id: 4, reviewer: "Xander", comment: "Captures youth perfectly.", rating: 4 },
      { id: 5, reviewer: "Yasmin", comment: "A classic coming-of-age story.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 6,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: Book_6,
    price: 455.00,
    rating: 4.7,
    description: "A fantasy adventure following Bilbo Baggins’ quest to reclaim a lost dwarf kingdom.",
    reviews: [
      { id: 1, reviewer: "Zane", comment: "Magical and adventurous.", rating: 5 },
      { id: 2, reviewer: "Amy", comment: "Perfect introduction to Middle-earth.", rating: 5 },
      { id: 3, reviewer: "Ben", comment: "Loved the characters and world.", rating: 4 },
      { id: 4, reviewer: "Cara", comment: "Exciting and imaginative.", rating: 4 },
      { id: 5, reviewer: "Dan", comment: "Classic fantasy tale.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 7,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    image: Book_7,
    price: 335.40,
    rating: 4.1,
    description: "A dystopian novel about censorship and the burning of books in a totalitarian society.",
    reviews: [
      { id: 1, reviewer: "Eve", comment: "A powerful warning about censorship.", rating: 5 },
      { id: 2, reviewer: "Frank", comment: "Thought-provoking and gripping.", rating: 4 },
      { id: 3, reviewer: "Grace", comment: "Relevant even today.", rating: 4 },
      { id: 4, reviewer: "Hank", comment: "Could be darker.", rating: 3 },
      { id: 5, reviewer: "Ivy", comment: "Important read for everyone.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 8,
    title: 'Moby-Dick',
    author: 'Herman Melville',
    image: Book_8,
    price: 390.99,
    rating: 3.9,
    description: "An epic sea story of Captain Ahab’s obsessive quest to kill the white whale, Moby Dick.",
    reviews: [
      { id: 1, reviewer: "Jack", comment: "Dense but rewarding.", rating: 4 },
      { id: 2, reviewer: "Kara", comment: "Classic American literature.", rating: 4 },
      { id: 3, reviewer: "Liam", comment: "Long but unforgettable.", rating: 3 },
      { id: 4, reviewer: "Mia", comment: "Beautiful descriptive writing.", rating: 4 },
      { id: 5, reviewer: "Noah", comment: "Challenging read.", rating: 3 },
    ],
          category: 'collection'

  },
  {
    id: 9,
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    image: Book_9,
    price: 580.20,
    rating: 4.4,
    description: "A historical epic focusing on Russian society during the Napoleonic Wars.",
    reviews: [
      { id: 1, reviewer: "Olga", comment: "Epic and profound.", rating: 5 },
      { id: 2, reviewer: "Pete", comment: "A bit overwhelming but rewarding.", rating: 4 },
      { id: 3, reviewer: "Quinn", comment: "Incredible character depth.", rating: 5 },
      { id: 4, reviewer: "Rose", comment: "Takes time but worth it.", rating: 4 },
      { id: 5, reviewer: "Steve", comment: "Classic for a reason.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 10,
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    image: Book_10,
    price: 360.00,
    rating: 4.3,
    description: "A gothic novel that explores themes of love, morality, and social class.",
    reviews: [
      { id: 1, reviewer: "Tara", comment: "Strong female protagonist.", rating: 5 },
      { id: 2, reviewer: "Umar", comment: "Romantic and dark.", rating: 4 },
      { id: 3, reviewer: "Vera", comment: "Beautifully written.", rating: 4 },
      { id: 4, reviewer: "Will", comment: "Engaging story.", rating: 4 },
      { id: 5, reviewer: "Xena", comment: "Loved the emotional depth.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 11,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    image: Book_11,
    price: 599.99,
    rating: 4.9,
    description: "An epic fantasy saga of the struggle between good and evil in Middle-earth.",
    reviews: [
      { id: 1, reviewer: "Yusuf", comment: "Masterpiece of fantasy literature.", rating: 5 },
      { id: 2, reviewer: "Zara", comment: "Epic story and world-building.", rating: 5 },
      { id: 3, reviewer: "Alan", comment: "Unforgettable adventure.", rating: 5 },
      { id: 4, reviewer: "Beth", comment: "A must-read for fantasy fans.", rating: 5 },
      { id: 5, reviewer: "Carl", comment: "Immersive and grand.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 12,
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    image: Book_12,
    price: 520.50,
    rating: 4.6,
    description: "A magical series about children discovering a fantasy world through a wardrobe.",
    reviews: [
      { id: 1, reviewer: "Diana", comment: "Magical and inspiring.", rating: 5 },
      { id: 2, reviewer: "Eli", comment: "Great for all ages.", rating: 4 },
      { id: 3, reviewer: "Faye", comment: "Classic fantasy adventure.", rating: 4 },
      { id: 4, reviewer: "Gabe", comment: "Loved the characters.", rating: 4 },
      { id: 5, reviewer: "Holly", comment: "Timeless story.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 13,
    title: 'Animal Farm',
    author: 'George Orwell',
    image: Book_13,
    price: 305.99,
    rating: 4.2,
    description: "An allegorical novella reflecting events leading up to the Russian Revolution.",
    reviews: [
      { id: 1, reviewer: "Iris", comment: "Sharp political satire.", rating: 5 },
      { id: 2, reviewer: "Jack", comment: "Short but powerful.", rating: 4 },
      { id: 3, reviewer: "Kate", comment: "Great allegory.", rating: 4 },
      { id: 4, reviewer: "Lance", comment: "Thought-provoking.", rating: 4 },
      { id: 5, reviewer: "Mona", comment: "Important historical context.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 14,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    image: Book_14,
    price: 390.25,
    rating: 4.1,
    description: "A dystopian novel envisioning a future with advanced reproductive technology and control.",
    reviews: [
      { id: 1, reviewer: "Nina", comment: "Chilling vision of the future.", rating: 4 },
      { id: 2, reviewer: "Omar", comment: "Complex themes.", rating: 4 },
      { id: 3, reviewer: "Pam", comment: "Interesting dystopia.", rating: 4 },
      { id: 4, reviewer: "Quinn", comment: "Could be more engaging.", rating: 3 },
      { id: 5, reviewer: "Rita", comment: "Thought-provoking.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 15,
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    image: Book_15,
    price: 342.00,
    rating: 4.0,
    description: "A gothic romance exploring intense and destructive love on the Yorkshire moors.",
    reviews: [
      { id: 1, reviewer: "Steve", comment: "Dark and passionate.", rating: 4 },
      { id: 2, reviewer: "Tina", comment: "Intense emotions.", rating: 4 },
      { id: 3, reviewer: "Uma", comment: "Gothic atmosphere is haunting.", rating: 5 },
      { id: 4, reviewer: "Vikram", comment: "Loved the characters.", rating: 4 },
      { id: 5, reviewer: "Wendy", comment: "A bit hard to follow.", rating: 3 },
    ],
          category: 'collection'

  },
  {
    id: 16,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    image: Book_16,
    price: 325.50,
    rating: 4.1,
    description: "A philosophical novel about vanity, morality, and the corrupting influence of beauty.",
    reviews: [
      { id: 1, reviewer: "Xander", comment: "Clever and dark.", rating: 4 },
      { id: 2, reviewer: "Yasmin", comment: "Wilde’s wit shines.", rating: 5 },
      { id: 3, reviewer: "Zane", comment: "Thought-provoking.", rating: 4 },
      { id: 4, reviewer: "Amy", comment: "Interesting moral questions.", rating: 4 },
      { id: 5, reviewer: "Ben", comment: "Classic Gothic fiction.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 17,
    title: 'Dracula',
    author: 'Bram Stoker',
    image: Book_17,
    price: 370.99,
    rating: 4.3,
    description: "A horror novel that introduced Count Dracula and established many conventions of vampire lore.",
    reviews: [
      { id: 1, reviewer: "Cara", comment: "Spooky and atmospheric.", rating: 4 },
      { id: 2, reviewer: "Dan", comment: "Classic horror.", rating: 4 },
      { id: 3, reviewer: "Eve", comment: "Loved the epistolary style.", rating: 5 },
      { id: 4, reviewer: "Frank", comment: "Could be scarier.", rating: 3 },
      { id: 5, reviewer: "Grace", comment: "Timeless vampire tale.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 18,
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    image: Book_18,
    price: 400.00,
    rating: 4.4,
    description: "A story about the struggles of a poor family during the Great Depression.",
    reviews: [
      { id: 1, reviewer: "Hank", comment: "Powerful social commentary.", rating: 5 },
      { id: 2, reviewer: "Ivy", comment: "Emotional and moving.", rating: 4 },
      { id: 3, reviewer: "Jack", comment: "Great characters.", rating: 4 },
      { id: 4, reviewer: "Kara", comment: "Sad but important.", rating: 4 },
      { id: 5, reviewer: "Liam", comment: "Classic American novel.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 19,
    title: 'Les Misérables',
    author: 'Victor Hugo',
    image: Book_19,
    price: 560.75,
    rating: 4.7,
    description: "An epic novel of love, justice, and redemption set against the backdrop of revolutionary France.",
    reviews: [
      { id: 1, reviewer: "Mia", comment: "Epic and emotional.", rating: 5 },
      { id: 2, reviewer: "Noah", comment: "Inspiring story.", rating: 5 },
      { id: 3, reviewer: "Olga", comment: "Long but rewarding.", rating: 4 },
      { id: 4, reviewer: "Pete", comment: "Beautifully written.", rating: 5 },
      { id: 5, reviewer: "Quinn", comment: "Classic literature.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 20,
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    image: Book_20,
    price: 495.20,
    rating: 4.5,
    description: "A psychological novel exploring morality and redemption through the story of a young murderer.",
    reviews: [
      { id: 1, reviewer: "Rose", comment: "Deep and philosophical.", rating: 5 },
      { id: 2, reviewer: "Steve", comment: "Complex characters.", rating: 4 },
      { id: 3, reviewer: "Tara", comment: "A bit heavy but worth it.", rating: 4 },
      { id: 4, reviewer: "Umar", comment: "Masterful storytelling.", rating: 5 },
      { id: 5, reviewer: "Vera", comment: "Classic Russian literature.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 21,
    title: 'The Odyssey',
    author: 'Homer',
    image: Book_21,
    price: 425.00,
    rating: 4.2,
    description: "An ancient Greek epic poem about Odysseus’ long journey home after the Trojan War.",
    reviews: [
      { id: 1, reviewer: "Will", comment: "Timeless adventure.", rating: 5 },
      { id: 2, reviewer: "Xena", comment: "Epic storytelling.", rating: 4 },
      { id: 3, reviewer: "Yusuf", comment: "Loved the mythology.", rating: 4 },
      { id: 4, reviewer: "Zara", comment: "Classic epic poem.", rating: 4 },
      { id: 5, reviewer: "Alan", comment: "Inspirational tale.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 22,
    title: 'Great Expectations',
    author: 'Charles Dickens',
    image: Book_22,
    price: 375.75,
    rating: 4.1,
    description: "A coming-of-age novel about the personal growth and development of an orphan named Pip.",
    reviews: [
      { id: 1, reviewer: "Beth", comment: "Classic Dickensian novel.", rating: 4 },
      { id: 2, reviewer: "Carl", comment: "Loved the characters.", rating: 4 },
      { id: 3, reviewer: "Diana", comment: "Engaging story.", rating: 4 },
      { id: 4, reviewer: "Eli", comment: "Well-written.", rating: 4 },
      { id: 5, reviewer: "Faye", comment: "Timeless themes.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 23,
    title: 'The Iliad',
    author: 'Homer',
    image: Book_23,
    price: 390.00,
    rating: 4.0,
    description: "An ancient Greek epic poem recounting the events of the Trojan War.",
    reviews: [
      { id: 1, reviewer: "Gabe", comment: "Heroic and tragic.", rating: 4 },
      { id: 2, reviewer: "Holly", comment: "Rich in mythology.", rating: 4 },
      { id: 3, reviewer: "Iris", comment: "Classic epic.", rating: 4 },
      { id: 4, reviewer: "Jack", comment: "Challenging but rewarding.", rating: 3 },
      { id: 5, reviewer: "Kate", comment: "Great poetry.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 24,
    title: 'Frankenstein',
    author: 'Mary Shelley',
    image: Book_24,
    price: 315.50,
    rating: 4.1,
    description: "A gothic novel about a scientist who creates a living being, exploring themes of creation and responsibility.",
    reviews: [
      { id: 1, reviewer: "Lance", comment: "Thought-provoking and dark.", rating: 4 },
      { id: 2, reviewer: "Mona", comment: "Classic horror and sci-fi.", rating: 4 },
      { id: 3, reviewer: "Nina", comment: "Loved the moral questions.", rating: 5 },
      { id: 4, reviewer: "Omar", comment: "Engaging and eerie.", rating: 4 },
      { id: 5, reviewer: "Pam", comment: "Timeless story.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 25,
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    image: Book_25,
    price: 480.90,
    rating: 4.6,
    description: "A tale of revenge, justice, and redemption set in post-Napoleonic France.",
    reviews: [
      { id: 1, reviewer: "Quinn", comment: "Exciting and dramatic.", rating: 5 },
      { id: 2, reviewer: "Rita", comment: "Great plot twists.", rating: 5 },
      { id: 3, reviewer: "Steve", comment: "Classic revenge story.", rating: 4 },
      { id: 4, reviewer: "Tara", comment: "Loved the characters.", rating: 4 },
      { id: 5, reviewer: "Umar", comment: "Well-paced and thrilling.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 26,
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    image: Book_26,
    price: 515.30,
    rating: 4.4,
    description: "A philosophical novel exploring faith, doubt, and morality through the story of a dysfunctional family.",
    reviews: [
      { id: 1, reviewer: "Vera", comment: "Deep and complex.", rating: 5 },
      { id: 2, reviewer: "Will", comment: "Heavy but rewarding.", rating: 4 },
      { id: 3, reviewer: "Xena", comment: "Philosophical masterpiece.", rating: 5 },
      { id: 4, reviewer: "Yusuf", comment: "Rich character development.", rating: 4 },
      { id: 5, reviewer: "Zara", comment: "Classic literature.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 27,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    image: Book_27,
    price: 450.00,
    rating: 4.7,
    description: "A philosophical tale about a shepherd’s journey to discover his personal legend.",
    reviews: [
      { id: 1, reviewer: "Alan", comment: "Inspirational and uplifting.", rating: 5 },
      { id: 2, reviewer: "Beth", comment: "Simple yet profound.", rating: 4 },
      { id: 3, reviewer: "Carl", comment: "Loved the story.", rating: 5 },
      { id: 4, reviewer: "Diana", comment: "Great lessons.", rating: 4 },
      { id: 5, reviewer: "Eli", comment: "Timeless message.", rating: 5 },
    ],
          category: 'collection'

  },
  {
    id: 28,
    title: 'Lolita',
    author: 'Vladimir Nabokov',
    image: Book_28,
    price: 375.60,
    rating: 4.0,
    description: "A controversial novel exploring complex themes of obsession and manipulation.",
    reviews: [
      { id: 1, reviewer: "Faye", comment: "Beautiful prose.", rating: 4 },
      { id: 2, reviewer: "Gabe", comment: "Difficult subject matter.", rating: 3 },
      { id: 3, reviewer: "Holly", comment: "Thought-provoking.", rating: 4 },
      { id: 4, reviewer: "Iris", comment: "Complex characters.", rating: 4 },
      { id: 5, reviewer: "Jack", comment: "Challenging read.", rating: 3 },
    ],
          category: 'collection'

  },
  {
    id: 29,
    title: 'Catch-22',
    author: 'Joseph Heller',
    image: Book_29,
    price: 430.20,
    rating: 4.3,
    description: "A satirical novel about the absurdities of war and bureaucracy.",
    reviews: [
      { id: 1, reviewer: "Kate", comment: "Witty and clever.", rating: 5 },
      { id: 2, reviewer: "Lance", comment: "Dark humor.", rating: 4 },
      { id: 3, reviewer: "Mona", comment: "Unique narrative style.", rating: 4 },
      { id: 4, reviewer: "Nina", comment: "Loved the satire.", rating: 5 },
      { id: 5, reviewer: "Omar", comment: "Engaging characters.", rating: 4 },
    ],
          category: 'collection'

  },
  {
    id: 30,
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    image: Book_30,
    price: 440.99,
    rating: 4.5,
    description: "A moving story about friendship and redemption set in Afghanistan.",
    reviews: [
      { id: 1, reviewer: "Pam", comment: "Emotional and heartfelt.", rating: 5 },
      { id: 2, reviewer: "Quinn", comment: "Powerful narrative.", rating: 5 },
      { id: 3, reviewer: "Rose", comment: "Beautifully written.", rating: 4 },
      { id: 4, reviewer: "Steve", comment: "Thought-provoking.", rating: 4 },
      { id: 5, reviewer: "Tara", comment: "Highly recommend.", rating: 5 },
    ],
          category: 'collection'

  },
 // Featured Books
  {
    id: 31,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    image: Book_31,
    price: 499,
    rating: 4.5,
    description: "A novel about regrets, second chances, and the infinite possibilities each life holds.",
    reviews: [
      { id: 1, reviewer: "Nora", comment: "Deeply moving and hopeful.", rating: 5 },
      { id: 2, reviewer: "Max", comment: "Some chapters felt slow.", rating: 4 },
      { id: 3, reviewer: "Liz", comment: "Loved the premise!", rating: 5 },
      { id: 4, reviewer: "Tom", comment: "Thought-provoking.", rating: 4 },
      { id: 5, reviewer: "Sara", comment: "Gave me chills.", rating: 5 },
    ],
      category: 'featured'

  },
  {
    id: 32,
    title: 'Atomic Habits',
    author: 'James Clear',
    image: Book_32,
    price: 399,
    rating: 4.8,
    description: "A guide to building good habits and breaking bad ones.",
    reviews: [
      { id: 1, reviewer: "Ace", comment: "Practical and clear.", rating: 5 },
      { id: 2, reviewer: "Lex", comment: "Helped me build daily habits.", rating: 5 },
      { id: 3, reviewer: "Jill", comment: "A bit repetitive.", rating: 4 },
      { id: 4, reviewer: "Raj", comment: "Solid framework explained well.", rating: 5 },
      { id: 5, reviewer: "Ally", comment: "Useful strategies.", rating: 4 },

    ],
          category: 'featured'

  },
  {
    id: 33,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    image: Book_33,
    price: 349,
    rating: 4.7,
    description: "A philosophical tale about a shepherd’s journey to discover his personal legend.",
    reviews: [
      { id: 1, reviewer: "Dream", comment: "Inspirational story.", rating: 5 },
      { id: 2, reviewer: "Leo", comment: "A spiritual journey indeed.", rating: 5 },
      { id: 3, reviewer: "Anya", comment: "Short but profound.", rating: 5 },
      { id: 4, reviewer: "Rita", comment: "Loved the wisdom in pages.", rating: 5 },
      { id: 5, reviewer: "Chris", comment: "Magical fable.", rating: 5 },

    ],
          category: 'featured'

  },
  {
    id: 34,
    title: 'The Day You Begin',
    author: 'Jacqueline Woodson',
    image: Book_34,
    price: 279,
    rating: 4.4,
    description: "A heartwarming story about feeling different and finding courage.",
    reviews: [
      { id: 1, reviewer: "Mom", comment: "Great for kids.", rating: 5 },
      { id: 2, reviewer: "Teacher", comment: "Empowering lesson.", rating: 5 },
      { id: 3, reviewer: "Jenny", comment: "Beautifully illustrated.", rating: 4 },
      { id: 4, reviewer: "Pam", comment: "Gentle & kind.", rating: 4 },
      { id: 5, reviewer: "Leo", comment: "Lovely message.", rating: 5 },

    ],
          category: 'featured'

  },
  {
    id: 35,
    title: 'The Monster',
    author: 'Walter Dean Myers',
    image: Book_35,
    price: 199,
    rating: 4.2,
    description: "A courtroom drama exploring themes of race and justice.",
    reviews: [
      { id: 1, reviewer: "Sean", comment: "Really intense.", rating: 4 },
      { id: 2, reviewer: "Aisha", comment: "Emotionally gripping.", rating: 5 },
      { id: 3, reviewer: "Vic", comment: "Made me think hard.", rating: 5 },
      { id: 4, reviewer: "Tina", comment: "A strong voice.", rating: 4 },
      { id: 5, reviewer: "Jay", comment: "Very realistic.", rating: 5 },

    ],
          category: 'featured'

  },

  // Trending Books
  {
    id: 36,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    image: Book_36,
    price: 449,
    rating: 4.6,
    description: "A psychological thriller about a woman’s act of violence...",
    reviews: [
      { id: 1, reviewer: "Theo", comment: "That twist was insane!", rating: 5 },
      { id: 2, reviewer: "Kat", comment: "Kept me on edge.", rating: 5 },
      { id: 3, reviewer: "Mike", comment: "A bit predictable later.", rating: 4 },
      { id: 4, reviewer: "Sara", comment: "Loved the pacing.", rating: 5 },
      { id: 5, reviewer: "April", comment: "Well-written thriller.", rating: 5 },

    ],
      category: 'trending'

  },
  {
    id: 37,
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    image: Book_37,
    price: 399,
    rating: 4.5,
    description: "A poignant romance novel tackling tough issues...",
    reviews: [
      { id: 1, reviewer: "Hope", comment: "Made me cry.", rating: 5 },
      { id: 2, reviewer: "Jen", comment: "Raw and real.", rating: 5 },
      { id: 3, reviewer: "Lucy", comment: "Heartbreaking.", rating: 4 },
      { id: 4, reviewer: "Zoe", comment: "Important story.", rating: 5 },
      { id: 5, reviewer: "Sam", comment: "Strong characters.", rating: 5 },
    ],
      category: 'trending'

  },
  {
    id: 38,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    image: Book_38,
    price: 299,
    rating: 4.4,
    description: "Personal finance book advocating financial literacy...",
    reviews: [
      { id: 1, reviewer: "Dan", comment: "Eye-opening.", rating: 5 },
      { id: 2, reviewer: "Beth", comment: "Filled with practical advice.", rating: 5 },
      { id: 3, reviewer: "Pam", comment: "Could be more global.", rating: 4 },
      { id: 4, reviewer: "Neil", comment: "Great motivator.", rating: 5 },
      { id: 5, reviewer: "Kate", comment: "Helpful read.", rating: 4 },
    ],
      category: 'trending'

  },
  {
    id: 39,
    title: 'Ikigai',
    author: 'Héctor García',
    image: Book_39,
    price: 349,
    rating: 4.3,
    description: "A guide to finding purpose and living a meaningful life.",
    reviews: [
      { id: 1, reviewer: "Ken", comment: "Very calming.", rating: 4 },
      { id: 2, reviewer: "Mia", comment: "Filled with wisdom.", rating: 5 },
      { id: 3, reviewer: "Amy", comment: "Nice balance.", rating: 4 },
      { id: 4, reviewer: "Raj", comment: "Practical tips.", rating: 5 },
      { id: 5, reviewer: "June", comment: "Lovely narrative.", rating: 5 },
    ],
      category: 'trending'

  },
  {
    id: 40,
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    image: Book_40,
    price: 379,
    rating: 4.5,
    description: "Train your mind for peace and purpose every day.",
    reviews: [
      { id: 1, reviewer: "Raj", comment: "Powerful mindset.", rating: 5 },
      { id: 2, reviewer: "Liz", comment: "Simple yet effective.", rating: 4 },
      { id: 3, reviewer: "Dev", comment: "Helpful routines.", rating: 5 },
      { id: 4, reviewer: "Amy", comment: "Inspired me daily.", rating: 5 },
      { id: 5, reviewer: "Sam", comment: "Good guidance.", rating: 4 },
    ],
      category: 'trending'

  },

  // Editor’s Pick
  {
    id: 41,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    image: Book_41,
    price: 1499,
    rating: 4.7,
    description: "A brief history of humankind, from the Stone Age to modern times.",
    reviews: [
      { id: 1, reviewer: "HistoryFan", comment: "Mind-blowing scope.", rating: 5 },
      { id: 2, reviewer: "Ann", comment: "Dense but enriching.", rating: 4 },
      { id: 3, reviewer: "Phil", comment: "Changed my perspective.", rating: 5 },
      { id: 4, reviewer: "Sue", comment: "Very detailed.", rating: 4 },
      { id: 5, reviewer: "Leo", comment: "Highly recommend.", rating: 5 },
    ],
      category: 'editorsPick'

  },
  {
    id: 42,
    title: 'Educated',
    author: 'Tara Westover',
    image: Book_42,
    price: 1199,
    rating: 4.6,
    description: "A memoir about growing up in a survivalist family and pursuing education.",
    reviews: [
      { id: 1, reviewer: "MemoirReader", comment: "Powerful and raw.", rating: 5 },
      { id: 2, reviewer: "Kate", comment: "Inspiring journey.", rating: 5 },
      { id: 3, reviewer: "Jen", comment: "Well-written narrative.", rating: 4 },
      { id: 4, reviewer: "Mark", comment: "Emotional and honest.", rating: 5 },
      { id: 5, reviewer: "Zoe", comment: "Stayed with me.", rating: 5 },
    ],
      category: 'editorsPick'

  },
  {
    id: 43,
    title: '1984',
    author: 'George Orwell',
    image: Book_43, 
    price: 899,
    rating: 4.6,
    description: "A dystopian novel about totalitarianism, surveillance, and the loss of individuality.",
    reviews: [
      { id: 1, reviewer: "BigBrother", comment: "Chillingly relevant.", rating: 5 },
      { id: 2, reviewer: "DystopiaLover", comment: "A masterpiece.", rating: 5 },
      { id: 3, reviewer: "Alex", comment: "Still scary today.", rating: 5 },
      { id: 4, reviewer: "Cam", comment: "Iconic warning.", rating: 5 },
      { id: 5, reviewer: "Rae", comment: "Powerful and haunting.", rating: 5 },
    ],
      category: 'editorsPick'

  },
];

export default booksData;

