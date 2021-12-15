const allArticles = [
  {
    id: 'dcbf95a9-b933-4ef5-a63a-a731d56412f1',
    author: {
      id: '1195e499-dd65-48d6-abd1-5a9f6a9b4ab7',
      firstName: 'Mirna',
      lastName: 'Ahmad',
    },
    title: 'auctor gravida sem praesent id massa id',
    description: 'turpis integer aliquet massa id lobortis convallis tortor',
    text: 'orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam',
    createdAt: '2021-04-28T20:47:50Z',
    likedBy: [],
    tags: [],
  },
  {
    id: '98518022-0521-4cde-95c8-a87ffc024d40',
    author: {
      id: '9c34d115-a13e-43d0-949b-c347a8347fbb',
      firstName: 'Oralle',
      lastName: 'Stanlick',
      avatarUrl:
        'https://robohash.org/doloresinducimus.png?size=50x50&set=set1',
    },
    title: 'proin risus praesent',
    description: 'nulla sed vel enim sit amet nunc viverra dapibus',
    text: 'orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla',
    createdAt: '2021-11-27T00:51:36Z',
    likedBy: [
      '9c34d115-a13e-43d0-949b-c347a8347fbb',
      '0e9bbf69-8ed3-470c-b7d3-f8145ecde4d8',
      'cd3c14a5-1ff4-412a-8562-147d3f105b0f',
    ],
    tags: ['Organized'],
  },
  {
    id: '03a0fa8a-cfbf-473e-bbb7-f273c58a2ae0',
    author: {
      id: '100d0b7e-4a9b-415f-a86c-11b32eb7b98d',
      firstName: 'Vincents',
      lastName: 'Larraway',
      avatarUrl:
        'https://robohash.org/nostrumducimuscupiditate.png?size=50x50&set=set1',
    },
    title: 'risus auctor sed',
    description:
      'vestibulum velit id pretium iaculis diam erat fermentum justo',
    text: 'cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta',
    createdAt: '2021-10-20T20:56:35Z',
    likedBy: [],
    tags: ['internet solution', 'client-driven'],
  },
  {
    id: 'a16a6af2-62bb-42ff-b0b7-c8d5ea003b25',
    author: {
      id: 'b72159e6-c17d-4f45-8b67-25f0916586a0',
      firstName: 'Rod',
      lastName: 'Charlot',
      avatarUrl:
        'https://robohash.org/corruptivoluptatemin.png?size=50x50&set=set1',
    },
    title: 'turpis donec posuere',
    description: 'ultrices vel augue vestibulum ante',
    text: 'convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
    createdAt: '2021-05-08T17:17:37Z',
    likedBy: [
      '9540febc-0fe0-4351-a4ae-972d783e941a',
      'f3a56255-bd0a-45f4-9064-29b251898258',
    ],
    tags: ['Realigned'],
  },
  {
    id: '4cbb9d4e-f9ff-4401-b973-55e2fab1a5a1',
    author: {
      id: 'cd3c14a5-1ff4-412a-8562-147d3f105b0f',
      firstName: 'Venus',
      lastName: 'Lauchlan',
      avatarUrl: 'https://robohash.org/utnihilsaepe.png?size=50x50&set=set1',
    },
    title: 'tempor convallis nulla neque libero convallis',
    description: 'eget tempus vel pede morbi porttitor lorem',
    text: 'mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim',
    createdAt: '2021-08-23T10:18:27Z',
    likedBy: [],
    tags: [],
  },
  {
    id: '14fda1f7-92d1-4c0b-827a-6788140a16d1',
    author: {
      id: '9540febc-0fe0-4351-a4ae-972d783e941a',
      firstName: 'Rubina',
      lastName: 'Vitall',
      avatarUrl:
        'https://robohash.org/odiosuscipitcorporis.png?size=50x50&set=set1',
    },
    title: 'id nisl venenatis',
    description: 'molestie lorem quisque ut erat curabitur gravida',
    text: 'sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse',
    createdAt: '2021-02-06T08:42:19Z',
    likedBy: [
      'cb26119b-ef8c-427e-9e1c-c24b272e6e9b',
      '100d0b7e-4a9b-415f-a86c-11b32eb7b98d',
      '1195e499-dd65-48d6-abd1-5a9f6a9b4ab7',
      'b72159e6-c17d-4f45-8b67-25f0916586a0',
      '266188d8-1102-4d3c-9cea-04435b568b97',
    ],
    tags: ['asymmetric', 'artificial intelligence'],
  },
  {
    id: '9db7a24a-6acf-4481-9156-aaa08e62ee73',
    author: {
      id: '9c34d115-a13e-43d0-949b-c347a8347fbb',
      firstName: 'Oralle',
      lastName: 'Stanlick',
      avatarUrl:
        'https://robohash.org/doloresinducimus.png?size=50x50&set=set1',
    },
    title: 'ut odio cras mi pede malesuada in',
    description: 'ac nulla sed vel enim sit amet nunc',
    text: 'lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus',
    createdAt: '2021-08-16T13:07:41Z',
    likedBy: [],
    tags: ['Down-sized', 'Extended', 'Digitized'],
  },
  {
    id: 'cb910361-dc79-4e52-ad2f-cd3c03193a4b',
    author: {
      id: '266188d8-1102-4d3c-9cea-04435b568b97',
      firstName: 'Daffie',
      lastName: 'Salasar',
      avatarUrl:
        'https://robohash.org/consecteturetprovident.png?size=50x50&set=set1',
    },
    title: 'aenean fermentum donec ut mauris',
    description: 'consequat ut nulla sed accumsan felis ut at',
    text: 'praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec',
    createdAt: '2021-08-13T18:02:33Z',
    likedBy: ['f3a56255-bd0a-45f4-9064-29b251898258'],
    tags: [],
  },
  {
    id: 'f893ed7b-6c97-429b-8f3d-b44e4deff4fd',
    author: {
      id: '9c34d115-a13e-43d0-949b-c347a8347fbb',
      firstName: 'Oralle',
      lastName: 'Stanlick',
      avatarUrl:
        'https://robohash.org/doloresinducimus.png?size=50x50&set=set1',
    },
    title: 'a odio in',
    description: 'purus sit amet nulla quisque arcu libero',
    text: 'id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis',
    createdAt: '2021-07-24T04:30:38Z',
    likedBy: ['cd3c14a5-1ff4-412a-8562-147d3f105b0f'],
    tags: ['project', 'Robust', 'asymmetric'],
  },
  {
    id: '83abdcce-1699-412d-95c5-e75e5f68c265',
    author: {
      id: 'cb26119b-ef8c-427e-9e1c-c24b272e6e9b',
      firstName: 'Cody',
      lastName: 'MacGaughy',
      avatarUrl:
        'https://robohash.org/quamexcepturiquos.png?size=50x50&set=set1',
    },
    title: 'dolor quis odio consequat varius integer',
    description: 'faucibus cursus urna ut tellus nulla ut erat id mauris',
    text: 'mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium',
    createdAt: '2021-07-21T09:22:23Z',
    likedBy: [
      'cb26119b-ef8c-427e-9e1c-c24b272e6e9b',
      '9540febc-0fe0-4351-a4ae-972d783e941a',
      '100d0b7e-4a9b-415f-a86c-11b32eb7b98d',
    ],
    tags: ['project', 'asymmetric'],
  },
];

module.exports = {
  allArticles,
};
