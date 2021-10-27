/* eslint-disable quotes */
// eslint-disable-next-line no-undef
module.exports = () => {
  const events = [
    {
      id: '1111',
      name: 'Solve JavaScript tasks',
      status: true,
      winner: {
        firstName: "Kiril",
        secondName: "Pankov",
        id: "2",
        pastTime: "00:00:10",
        counter: 11
      },
      participants: [
        {
          firstName: "Anna",
          secondName: "Udyna",
          id: "1",
          pastTime: "00:02:03",
          counter: 123
        },
        {
          firstName: "Kiril",
          secondName: "Pankov",
          id: "2",
          pastTime: "00:00:10",
          counter: 11
        },
        {
          firstName: "Andrey",
          secondName: "Levui",
          id: "3",
          pastTime: "00:01:10",
          counter: 70
        }
      ] 
    },
    {
      id: '2222',
      name: 'Solve HTML&CSS tasks',
      status: true,
      winner: {
        firstName: "Evgen",
        secondName: "Stoyanov",
        id: "2",
        pastTime: "00:00:20",
        counter: 20
      },
      participants: [
        {
          firstName: "Sergei",
          secondName: "Holst",
          id: "1",
          pastTime: "00:02:03",
          counter: 123
        },
        {
          firstName: "Evgen",
          secondName: "Stoyanov",
          id: "2",
          pastTime: "00:00:20",
          counter: 20
        },
        {
          firstName: "Viktoria",
          secondName: "Markina",
          id: "3",
          pastTime: "00:01:10",
          counter: 70
        },
        {
          firstName: "Elizaveta",
          secondName: "Shpuns",
          id: "4",
          pastTime: "00:00:40",
          counter: 40
        }
      ] 
    },
    {
      id: '3333',
      name: 'Solve React tasks',
      status: true,
      winner: {
        firstName: "Diana",
        secondName: "Reznikova",
        id: "2",
        pastTime: "00:00:10",
        counter: 11
      },
      participants: [
        {
          firstName: "Svetlana",
          secondName: "Dyak",
          id: "1",
          pastTime: "00:02:03",
          counter: 123
        },
        {
          firstName: "Diana",
          secondName: "Reznikova",
          id: "2",
          pastTime: "00:00:10",
          counter: 11
        },
        {
          firstName: "Vasylii",
          secondName: "Solovev",
          id: "3",
          pastTime: "00:01:10",
          counter: 70
        },
        {
          firstName: "Mehmet",
          secondName: "Djumanov",
          id: "4",
          pastTime: "00:01:10",
          counter: 70
        }
      ] 
    },
    {
      id: '4444',
      name: 'Drink beer on time',
      status: false,
      winner: false,
      participants: [
        {
          firstName: "Roman",
          secondName: "Bahirov",
          id: "1",
          pastTime: "00:02:03",
          counter: 123
        },
        {
          firstName: "Diana",
          secondName: "Reznikova",
          id: "2",
          pastTime: "00:03:10",
          counter: 190
        },
        {
          firstName: "Evgen",
          secondName: "Bakumov",
          id: "3",
          pastTime: "00:02:10",
          counter: 130
        },
        {
          firstName: "Mehmet",
          secondName: "Djumanov",
          id: "4",
          pastTime: "00:01:40",
          counter: 100
        }
      ] 
    },
    {
      id: '5555',
      name: 'Run 1 miles',
      status: false,
      winner: false,
      participants: [
        {
          firstName: "Roman",
          secondName: "Bahirov",
          id: "1",
          pastTime: "00:02:03",
          counter: 123
        },
        {
          firstName: "Oleksandr",
          secondName: "Palchikov",
          id: "2",
          pastTime: "00:03:10",
          counter: 190
        },
        {
          firstName: "Evgen",
          secondName: "Bakumov",
          id: "3",
          pastTime: "00:02:10",
          counter: 130
        },
        {
          firstName: "Artur",
          secondName: "Muhailov",
          id: "4",
          pastTime: "00:01:40",
          counter: 100
        }
      ] 
    }
  ];
  return { events };
};
