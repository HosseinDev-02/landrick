const menuItems = [
    {
        id: 1,
        title: "صفحه اصلی",
        href: "/",
    },
    {
        id: 2,
        title: "وبلاگ",
        href: "/blogs",
    },
    {
        id: 3,
        title: "شرکت",
        href: "#",
        subLinks: [
            {
                id: 1,
                title: "خدمات",
                href: "/services",
            },
            {
                id: 2,
                title: "تاریخچه",
                href: "/history",
            },
            {
                id: 3,
                title: "تیم ما",
                href: "/team",
            },
            {
                id: 4,
                title: "قیمت گذاری",
                href: "/pricing",
            },
            {
                id: 5,
                title: "درباره ما",
                href: "/aboutus",
            },
        ],
    },
    {
        id: 4,
        title: "تماس با ما",
        href: "/contact-us",
    },
];
const footerComponyLinks = [
    {
        id: "1",
        title: "درباره ما",
        href: "/aboutus",
    },
    {
        id: "2",
        title: "خدمات",
        href: "/services",
    },
    {
        id: "3",
        title: "تیم",
        href: "/team",
    },
    {
        id: "4",
        title: "قیمت گذاری",
        href: "/pricing",
    },
    {
        id: "5",
        title: "پروژه",
        href: "#",
    },
    {
        id: "6",
        title: "وبلاگ",
        href: "/blogs",
    },
    {
        id: "7",
        title: "مشاغل",
        href: "#",
    },
];
const useFulLinks = [
    {
        id: '1',
        title: 'خدمات سایت',
        href: '#'
    },
    {
        id: '2',
        title: 'حریم خصوصی',
        href: '#'
    },
    {
        id: '3',
        title: 'مستند',
        href: '#'
    },
    {
        id: '4',
        title: 'تغییرات',
        href: '#'
    },
    {
        id: '5',
        title: 'اجزاء',
        href: '#'
    },
]
const userProfileLinks = [
    {
        id: 1,
        title: 'پروفایل',
        href: 'profile',
        shortName: 'profile'
    },
    {
        id: 2,
        title: 'اعضا',
        href: 'members',
        shortName: 'members'
    },
    {
        id: 3,
        title: 'نمونه کار',
        href: 'projects',
        shortName: 'projects'
    },
    {
        id: 4,
        title: 'پیام ها',
        href: 'messages',
        shortName: 'messages'
    },
    {
        id: 5,
        title: 'پرداخت ها',
        href: 'transactions',
        shortName: 'transactions'
    },
    {
        id: 6,
        title: 'تنظیمات',
        href: 'setting',
        shortName: 'setting'
    },
    {
        id: 7,
        title: 'خروج',
        href: '#',
        shortName: ''
    },
]

export { menuItems, footerComponyLinks, useFulLinks, userProfileLinks };
