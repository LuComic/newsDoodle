export type userType = {
	type: string;
	name: string;
	likeCount: number;
	date: string;
};

export type topicType = {
	type: string;
	name: string;
	count: number;
	likeCount: number;
};

export type articleType = {
	type: string;
	name: string;
	author: string;
	likeCount: number;
	topic: string;
	date: string;
	description: string;
};

export type titleType = {
	type: string;
	name: string;
	author: string;
	likeCount: number;
	topic: string;
	date: string;
	description: string;
};

export type newsType = {
	type: string;
	name: string;
	author: string; // This is a news corp, like The Times etc, not an individual person
	likeCount: number;
	topic: string;
	date: string;
	description: string;
};

export const users: userType[] = [
	{ type: 'user', name: 'Alice Johnson', likeCount: 42, date: '2024-01-15' },
	{ type: 'user', name: 'Bob Smith', likeCount: 18, date: '2024-02-20' },
	{ type: 'user', name: 'Charlie Brown', likeCount: 95, date: '2024-03-10' },
	{ type: 'user', name: 'Diana Prince', likeCount: 67, date: '2024-01-28' },
	{ type: 'user', name: 'Ethan Hunt', likeCount: 33, date: '2024-02-05' }
];

export const topics: topicType[] = [
	{ type: 'topic', name: 'Technology', count: 150, likeCount: 1200 },
	{ type: 'topic', name: 'Politics', count: 89, likeCount: 650 },
	{ type: 'topic', name: 'Sports', count: 203, likeCount: 1800 },
	{ type: 'topic', name: 'Entertainment', count: 167, likeCount: 2100 },
	{ type: 'topic', name: 'Science', count: 94, likeCount: 980 }
];

export const articles: articleType[] = [
	{
		type: 'article',
		name: 'The Future of AI',
		author: 'John Doe',
		likeCount: 234,
		topic: 'Technology',
		date: '2024-01-10',
		description:
			'Exploring the latest advancements in artificial intelligence and how they will reshape industries. This comprehensive analysis covers machine learning breakthroughs and their potential impact on society.'
	},
	{
		type: 'article',
		name: 'Climate Change Solutions',
		author: 'Jane Smith',
		likeCount: 189,
		topic: 'Science',
		date: '2024-02-15',
		description:
			'A deep dive into innovative approaches to combat climate change, from renewable energy technologies to carbon capture methods. Scientists are developing promising strategies to address this global challenge.'
	},
	{
		type: 'article',
		name: 'Election Results Analysis',
		author: 'Mike Johnson',
		likeCount: 156,
		topic: 'Politics',
		date: '2024-03-05',
		description:
			'Breaking down the recent election outcomes and what they mean for the political landscape. This analysis examines voter trends, key issues, and the implications for future policy decisions.'
	},
	{
		type: 'article',
		name: 'Championship Game Recap',
		author: 'Sarah Williams',
		likeCount: 312,
		topic: 'Sports',
		date: '2024-01-22',
		description:
			'Relive the thrilling moments from the championship game, including standout performances and game-changing plays. The match delivered excitement and drama from start to finish.'
	},
	{
		type: 'article',
		name: 'Award Show Highlights',
		author: 'Tom Anderson',
		likeCount: 278,
		topic: 'Entertainment',
		date: '2024-02-28',
		description:
			"Covering the most memorable moments from this year's award ceremony, from red carpet fashion to acceptance speeches. The event celebrated outstanding achievements in entertainment."
	},
	{
		type: 'article',
		name: 'Holiday Tech Trends 2025',
		author: 'Rachel Kim',
		likeCount: 425,
		topic: 'Technology',
		date: '2025-12-25',
		description:
			'Exploring the latest technology trends that shaped the holiday season, from AI-powered shopping assistants to virtual reality gift experiences. This year brought unprecedented innovation to consumer technology.'
	},
	{
		type: 'article',
		name: 'Winter Sports Championship',
		author: 'David Lee',
		likeCount: 389,
		topic: 'Sports',
		date: '2025-12-24',
		description:
			'Coverage of the thrilling winter sports championship that captivated audiences worldwide. Athletes showcased incredible skill and determination in this highly competitive event.'
	},
	{
		type: 'article',
		name: 'Climate Summit Outcomes',
		author: 'Emma Watson',
		likeCount: 312,
		topic: 'Science',
		date: '2025-12-23',
		description:
			'Analyzing the key outcomes from the recent global climate summit, including new commitments to renewable energy and carbon reduction targets. World leaders reached significant agreements.'
	},
	{
		type: 'article',
		name: 'Political Landscape Shifts',
		author: 'Robert Park',
		likeCount: 298,
		topic: 'Politics',
		date: '2025-12-22',
		description:
			'Examining the recent shifts in the political landscape and their implications for upcoming elections. Analysts discuss voter sentiment and emerging policy priorities.'
	},
	{
		type: 'article',
		name: 'Streaming Service Revolution',
		author: 'Sophie White',
		likeCount: 267,
		topic: 'Entertainment',
		date: '2025-12-21',
		description:
			'How streaming services are revolutionizing entertainment consumption. New platforms and content strategies are changing how audiences discover and enjoy media.'
	},
	{
		type: 'article',
		name: 'Quantum Computing Breakthrough',
		author: 'James Liu',
		likeCount: 456,
		topic: 'Technology',
		date: '2025-12-20',
		description:
			'Scientists announce a major breakthrough in quantum computing that could solve complex problems in minutes instead of years. This advancement opens new possibilities for research and industry.'
	},
	{
		type: 'article',
		name: 'Marathon World Record',
		author: 'Maria Garcia',
		likeCount: 523,
		topic: 'Sports',
		date: '2025-12-19',
		description:
			'An athlete breaks the world marathon record in an extraordinary display of endurance and determination. The achievement marks a new milestone in athletic performance.'
	},
	{
		type: 'article',
		name: 'Space Exploration Milestone',
		author: 'Alex Thompson',
		likeCount: 378,
		topic: 'Science',
		date: '2025-11-10',
		description:
			'A historic space mission reaches a new milestone in exploration, providing unprecedented insights into our solar system. The mission continues to deliver groundbreaking discoveries.'
	}
];

export const titles: titleType[] = [
	{
		type: 'title',
		name: 'Breaking: Major Discovery',
		author: 'Dr. Emily Chen',
		likeCount: 445,
		topic: 'Science',
		date: '2024-01-18',
		description:
			'Scientists have made a groundbreaking discovery that could revolutionize our understanding of the universe. This finding opens new possibilities for future research and technological applications.'
	},
	{
		type: 'title',
		name: 'Tech Giant Announces New Product',
		author: 'Alex Rivera',
		likeCount: 321,
		topic: 'Technology',
		date: '2024-02-12',
		description:
			'A leading technology company has unveiled its latest innovation, promising to transform how we interact with digital devices. The product features cutting-edge technology and enhanced user experience.'
	},
	{
		type: 'title',
		name: 'Policy Reform Discussion',
		author: 'Patricia Lee',
		likeCount: 198,
		topic: 'Politics',
		date: '2024-03-08',
		description:
			'Policymakers are engaging in critical discussions about proposed reforms that could significantly impact citizens. The debate centers on balancing progress with traditional values.'
	},
	{
		type: 'title',
		name: 'Movie Premiere Review',
		author: 'Chris Taylor',
		likeCount: 267,
		topic: 'Entertainment',
		date: '2024-01-25',
		description:
			'The highly anticipated film premiere has received rave reviews from critics and audiences alike. The movie delivers compelling storytelling and impressive performances from the cast.'
	},
	{
		type: 'title',
		name: 'Olympic Qualifiers Update',
		author: 'Jordan Martinez',
		likeCount: 389,
		topic: 'Sports',
		date: '2024-02-18',
		description:
			'Athletes from around the world are competing in the final qualifying rounds for the upcoming Olympic Games. The competition has been intense, with several surprising results and standout performances.'
	},
	{
		type: 'title',
		name: 'Breaking: AI Regulation Passed',
		author: 'Dr. Sarah Johnson',
		likeCount: 567,
		topic: 'Technology',
		date: '2025-12-25',
		description:
			'New comprehensive AI regulation legislation passes, setting global standards for artificial intelligence development and deployment. The law addresses ethical concerns and safety requirements.'
	},
	{
		type: 'title',
		name: 'Holiday Box Office Record',
		author: 'Mark Stevens',
		likeCount: 445,
		topic: 'Entertainment',
		date: '2025-12-24',
		description:
			'The holiday season breaks box office records with blockbuster releases drawing massive audiences. The entertainment industry celebrates unprecedented success.'
	},
	{
		type: 'title',
		name: 'Medical Research Breakthrough',
		author: 'Dr. Lisa Wang',
		likeCount: 612,
		topic: 'Science',
		date: '2025-12-23',
		description:
			'Researchers announce a major medical breakthrough that could revolutionize treatment for chronic diseases. The discovery offers new hope for millions of patients worldwide.'
	},
	{
		type: 'title',
		name: 'Trade Agreement Signed',
		author: 'Paul Richardson',
		likeCount: 334,
		topic: 'Politics',
		date: '2025-12-22',
		description:
			'Major international trade agreement signed, promising to boost economic cooperation between nations. The deal addresses tariffs and market access issues.'
	},
	{
		type: 'title',
		name: 'Championship Finals Preview',
		author: 'Tyler Moore',
		likeCount: 489,
		topic: 'Sports',
		date: '2025-12-21',
		description:
			'Preview of the highly anticipated championship finals featuring top teams and star athletes. Experts analyze matchups and predict outcomes.'
	},
	{
		type: 'title',
		name: 'Renewable Energy Milestone',
		author: 'Dr. Amanda Foster',
		likeCount: 378,
		topic: 'Science',
		date: '2025-12-20',
		description:
			'Renewable energy sources now account for over 50% of global electricity generation, marking a historic milestone in the transition to clean energy.'
	},
	{
		type: 'title',
		name: 'Tech Startup Valuation',
		author: 'Ryan Chen',
		likeCount: 423,
		topic: 'Technology',
		date: '2025-12-19',
		description:
			"Tech startup reaches unprecedented valuation following successful product launch and rapid user growth. Investors celebrate the company's innovative approach."
	},
	{
		type: 'title',
		name: 'Cultural Festival Highlights',
		author: 'Nicole Adams',
		likeCount: 256,
		topic: 'Entertainment',
		date: '2025-10-05',
		description:
			'Annual cultural festival showcases diverse traditions and artistic expressions from around the world. The event celebrates global heritage and creativity.'
	}
];

export const news: newsType[] = [
	{
		type: 'news',
		name: 'Global Economic Summit Coverage',
		author: 'The Times',
		likeCount: 512,
		topic: 'Politics',
		date: '2024-01-12',
		description:
			'World leaders gathered to discuss critical economic policies and international cooperation. The summit addressed pressing global challenges and outlined strategies for sustainable economic growth.'
	},
	{
		type: 'news',
		name: 'Space Mission Success',
		author: 'Science Daily',
		likeCount: 678,
		topic: 'Science',
		date: '2024-02-22',
		description:
			'A historic space mission has achieved its primary objectives, marking a significant milestone in space exploration. The successful mission paves the way for future interplanetary endeavors.'
	},
	{
		type: 'news',
		name: 'New Smartphone Launch',
		author: 'Tech News',
		likeCount: 423,
		topic: 'Technology',
		date: '2024-03-01',
		description:
			'The latest smartphone model has been released with advanced features and improved performance. Tech enthusiasts are praising the device for its innovative design and cutting-edge capabilities.'
	},
	{
		type: 'news',
		name: 'World Cup Final Report',
		author: 'Sports Illustrated',
		likeCount: 856,
		topic: 'Sports',
		date: '2024-01-30',
		description:
			'The World Cup final delivered an unforgettable match with dramatic moments and exceptional athleticism. Fans worldwide witnessed history being made on the field.'
	},
	{
		type: 'news',
		name: 'Film Festival Opening Night',
		author: 'Entertainment Weekly',
		likeCount: 567,
		topic: 'Entertainment',
		date: '2024-02-14',
		description:
			'The prestigious film festival kicked off with a star-studded opening night ceremony. The event showcases exceptional cinema from around the world and celebrates artistic achievement.'
	},
	{
		type: 'news',
		name: 'Global Peace Summit Concludes',
		author: 'The Guardian',
		likeCount: 789,
		topic: 'Politics',
		date: '2025-12-25',
		description:
			'International peace summit concludes with historic agreements on conflict resolution and diplomatic cooperation. World leaders commit to new frameworks for global stability.'
	},
	{
		type: 'news',
		name: 'Holiday Shopping Records',
		author: 'Business Today',
		likeCount: 634,
		topic: 'Technology',
		date: '2025-12-24',
		description:
			'Holiday shopping season sets new records with online sales reaching unprecedented levels. E-commerce platforms report massive traffic and sales volumes.'
	},
	{
		type: 'news',
		name: 'Scientific Discovery Announced',
		author: 'Science News',
		likeCount: 712,
		topic: 'Science',
		date: '2025-12-23',
		description:
			'Groundbreaking scientific discovery announced that could change our understanding of fundamental physics. Researchers worldwide are celebrating this major achievement.'
	},
	{
		type: 'news',
		name: 'Sports League Expansion',
		author: 'Sports Network',
		likeCount: 556,
		topic: 'Sports',
		date: '2025-12-22',
		description:
			'Major sports league announces expansion plans, adding new teams and markets. The move promises to bring professional sports to more communities.'
	},
	{
		type: 'news',
		name: 'Entertainment Industry Awards',
		author: 'Celebrity News',
		likeCount: 623,
		topic: 'Entertainment',
		date: '2025-12-21',
		description:
			'Annual entertainment industry awards ceremony honors outstanding achievements in film, television, and music. Stars gather for the prestigious event.'
	},
	{
		type: 'news',
		name: 'Technology Innovation Award',
		author: 'Tech World',
		likeCount: 445,
		topic: 'Technology',
		date: '2025-12-20',
		description:
			'Leading technology company receives innovation award for revolutionary product development. The recognition highlights cutting-edge engineering and design.'
	},
	{
		type: 'news',
		name: 'Environmental Protection Initiative',
		author: 'Eco News',
		likeCount: 678,
		topic: 'Science',
		date: '2025-12-19',
		description:
			'New environmental protection initiative launched to combat climate change and preserve biodiversity. Governments and organizations commit significant resources.'
	},
	{
		type: 'news',
		name: 'Economic Growth Report',
		author: 'Financial Times',
		likeCount: 512,
		topic: 'Politics',
		date: '2025-09-12',
		description:
			'Latest economic growth report shows positive trends across multiple sectors. Analysts predict continued expansion in the coming quarters.'
	}
];
