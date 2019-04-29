module.exports = function fixtureData(db) {
  return {
    __collection__: {
      chats: {
        __doc__: {
          chat_a: {
            creator: db.doc('users/user_b'),
            isPublic: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_i'),
            page: db.doc('pages/site_a__page_a'),
            site: db.doc('sites/site_a'),
          },

          chat_b: {
            creator: db.doc('users/user_c'),
            isPublic: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_j'),
            page: db.doc('pages/site_a__page_a'),
            site: db.doc('sites/site_a'),
          },

          chat_c: {
            creator: db.doc('users/user_d'),
            isPublic: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_k'),
            page: db.doc('pages/site_a__page_a'),
            site: db.doc('sites/site_a'),
          },

          chat_d: {
            creator: db.doc('users/user_e'),
            isPublic: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_l'),
            page: db.doc('pages/site_a__page_a'),
            site: db.doc('sites/site_a'),
          },

          chat_e: {
            creator: db.doc('users/user_f'),
            isPublic: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_m'),
            page: db.doc('pages/site_a__page_a'),
            site: db.doc('sites/site_a'),
          },
        },
      },

      messages: {
        __doc__: {
          message_a: {
            createdOn: new Date('2017-01-01'),
            media: null,
            text: 'Message A',
            author: db.doc('users/user_b'),
            chat: db.doc('chats/chat_a'),
          },

          message_b: {
            createdOn: new Date('2017-01-01'),
            media: null,
            text: null,
            author: db.doc('users/user_b'),
            chat: db.doc('chats/chat_a'),
          },

          message_c: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message C',
            author: db.doc('users/user_a'),
            chat: db.doc('chats/chat_a'),
          },

          message_d: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message D',
            author: db.doc('users/user_b'),
            chat: db.doc('chats/chat_a'),
          },

          message_e: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message E',
            author: db.doc('users/user_b'),
            chat: db.doc('chats/chat_a'),
          },

          message_f: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message F',
            author: db.doc('users/user_b'),
            chat: db.doc('chats/chat_a'),
          },

          message_g: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message G',
            author: db.doc('users/user_b'),
            chat: db.doc('chats/chat_a'),
          },

          message_h: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message H',
            author: db.doc('users/user_b'),
            chat: db.doc('chats/chat_a'),
          },
          
          message_i: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message I',
            author: db.doc('users/user_a'),
            chat: db.doc('chats/chat_a'),
          },

          message_j: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message J',
            author: db.doc('users/user_c'),
            chat: db.doc('chats/chat_b'),
          },

          message_k: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message K',
            author: db.doc('users/user_d'),
            chat: db.doc('chats/chat_c'),
          },

          message_l: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message L',
            author: db.doc('users/user_e'),
            chat: db.doc('chats/chat_d'),
          },

          message_m: {
            createdOn: new Date('2017-01-02'),
            media: null,
            text: 'Message M',
            author: db.doc('users/user_f'),
            chat: db.doc('chats/chat_e'),
          },
        },
      },

      pages: {
        __doc__: {
          site_a__page_a: {
            createdOn: new Date('2017-01-01'),
            description: null,
            image: null,
            site: db.doc('sites/site_a'),
            slug: '%2Ffoo%2Fbar',
            title: null,
          },

          site_b__page_a: {
            createdOn: new Date('2017-01-01'),
            description: null,
            image: null,
            site: db.doc('sites/site_b'),
            slug: '%2Ffoo%2Fbar',
            title: null,
          },
        },
      },

      sites: {
        __doc__: {
          site_a: {
            brandColor: '#03a9f4',
            displayName: 'Site A',
            hostname: 'site-a.com',
            imageUrl: 'site-a.jpg',
            isVerified: true,
            name: 'site a',
            theme: 'light',

            __collection__: {
              admins: {
                __doc__: {
                  user_a: {
                    cloudFirestoreReference: db.doc('users/user_a'),
                    username: 'user_a',
                  },
                },
              },

              slugs: {
                __doc__: {
                  '%2Ffoo%2Fbar': {},
                },
              },
            },
          },

          site_b: {
            brandColor: '#009688',
            displayName: 'Site B',
            hostname: 'site-b.com',
            imageUrl: 'site-b.jpg',
            isVerified: true,
            name: 'site b',
            theme: 'light',

            __collection__: {
              admins: {
                __doc__: {
                  user_a: {
                    cloudFirestoreReference: db.doc('users/user_a'),
                    username: 'user_a',
                  },
                },
              },

              slugs: {
                __doc__: {
                  '%2Ffoo%2Fbar': {},
                },
              },
            },
          },
        },
      },

      usernames: {
        __doc__: {
          user_a: {
            cloudFirestoreReference: db.doc('users/user_a'),
          },

          user_b: {
            cloudFirestoreReference: db.doc('users/user_b'),
          },

          user_c: {
            cloudFirestoreReference: db.doc('users/user_c'),
          },

          user_d: {
            cloudFirestoreReference: db.doc('users/user_d'),
          },

          user_e: {
            cloudFirestoreReference: db.doc('users/user_e'),
          },

          user_f: {
            cloudFirestoreReference: db.doc('users/user_f'),
          },
        },
      },

      users: {
        __doc__: {
          user_a: {
            displayUsername: 'user_a',
            photoUrl: null,
            shortBio: null,
            username: 'user_a',

            __collection__: {
              sitesAsAdmin: {
                __doc__: {
                  site_a: {
                    cloudFirestoreReference: db.doc('sites/site_a'),
                  },
                },
              },
            },
          },

          user_b: {
            displayUsername: 'user_b',
            photoUrl: null,
            shortBio: null,
            username: 'user_b',
          },

          user_c: {
            displayUsername: 'user_b',
            photoUrl: null,
            shortBio: null,
            username: 'user_b',
          },

          user_d: {
            displayUsername: 'user_d',
            photoUrl: null,
            shortBio: null,
            username: 'user_d',
          },

          user_e: {
            displayUsername: 'user_e',
            photoUrl: null,
            shortBio: null,
            username: 'user_e',
          },

          user_f: {
            displayUsername: 'user_f',
            photoUrl: null,
            shortBio: null,
            username: 'user_f',
          },
        },
      },
    },
  };
};
