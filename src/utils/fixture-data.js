module.exports = function fixtureData(db) {
  return {
    __collection__: {
      chats: {
        __doc__: {
          chat_a: {
            creator: db.doc('users/user_b'),
            isPublicized: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_i'),
            page: db.doc('pages/site_a__page_a'),
            publicizedTitle: 'Message A',
            site: db.doc('sites/site_a'),
          },

          chat_b: {
            creator: db.doc('users/user_c'),
            isPublicized: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_j'),
            page: db.doc('pages/site_a__page_a'),
            publicizedTitle: 'Message J',
            site: db.doc('sites/site_a'),
          },

          chat_c: {
            creator: db.doc('users/user_d'),
            isPublicized: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_k'),
            page: db.doc('pages/site_a__page_a'),
            publicizedTitle: 'Message K',
            site: db.doc('sites/site_a'),
          },

          chat_d: {
            creator: db.doc('users/user_e'),
            isPublicized: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_l'),
            page: db.doc('pages/site_a__page_a'),
            publicizedTitle: 'Message L',
            site: db.doc('sites/site_a'),
          },

          chat_e: {
            creator: db.doc('users/user_f'),
            isPublicized: true,
            lastActivityTimestamp: new Date('2017-01-02'),
            lastMessage: db.doc('messages/message_m'),
            page: db.doc('pages/site_a__page_a'),
            publicizedTitle: 'Message M',
            site: db.doc('sites/site_a'),
          },
        },
      },

      defaultStickerPacks: {
        __doc__: {
          sticker_pack_a: {},
          sticker_pack_b: {},
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
            media: { id: 'sticker_a1', type: 'sticker' },
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
                    name: 'test user a',
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
                    name: 'test user a',
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

      stickerPacks: {
        __doc__: {
          sticker_pack_a: {
            artist: 'Sticker Pack A Artist',
            description: 'Sticker Pack A Description',
            name: 'Sticker Pack A',
            thumbnailUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2Fy2viRS322OSh1jCY2Z8T%2Fmuch_awesome.png?alt=media&token=6df822af-1451-44ac-aba1-d6986fa2c66f',
          },

          sticker_pack_b: {
            artist: 'Sticker Pack B Brtist',
            description: 'Sticker Pack B Description',
            name: 'Sticker Pack B',
            thumbnailUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2FGVMKSSnNwzEMuKTh9d3k%2Fyummy.png?alt=media&token=b96af174-045c-4b68-b586-01f341283bd6',
          },
        },
      },

      stickers: {
        __doc__: {
          sticker_a1: {
            description: 'Sad',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2Fy2viRS322OSh1jCY2Z8T%2Fsad.png?alt=media&token=23c8de07-a228-4d49-9cb1-ff53e36d515b',
            keywords: ['sad', 'cry', 'huhuhu'],
            pack: db.doc('stickerPacks/sticker_pack_a'),
          },

          sticker_a2: {
            description: 'Much awesome',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2Fy2viRS322OSh1jCY2Z8T%2Fmuch_awesome.png?alt=media&token=6df822af-1451-44ac-aba1-d6986fa2c66f',
            keywords: ['much awesome', 'awesome'],
            pack: db.doc('stickerPacks/sticker_pack_a'),
          },

          sticker_b1: {
            description: 'Yummy!',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2FGVMKSSnNwzEMuKTh9d3k%2Fyummy.png?alt=media&token=b96af174-045c-4b68-b586-01f341283bd6',
            keywords: ['yummy', 'yum', 'mmm', 'nom nom nom'],
            pack: db.doc('stickerPacks/sticker_pack_b'),
          },

          sticker_b2: {
            description: 'Have you seen this?',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2FGVMKSSnNwzEMuKTh9d3k%2Fhave_you_seen_this.png?alt=media&token=c1b63b7e-fcdf-40f5-89f0-b6a8a92f2686',
            keywords: ['have you seen this?', 'check this out', 'look'],
            pack: db.doc('stickerPacks/sticker_pack_b'),
          },
        },
      },

      userMetaInfos: {
        __doc__: {
          user_a: {
            accessToken: {},
            notificationTokens: [],
            unreadChats: [],
          },

          user_b: {
            accessToken: {},
            notificationTokens: [],
            unreadChats: [],
          },

          user_c: {
            accessToken: {},
            notificationTokens: [],
            unreadChats: [],
          },

          user_d: {
            accessToken: {},
            notificationTokens: [],
            unreadChats: [],
          },

          user_e: {
            accessToken: {},
            notificationTokens: [],
            unreadChats: [],
          },

          user_f: {
            accessToken: {},
            notificationTokens: [],
            unreadChats: [],
          },
        },
      },

      users: {
        __doc__: {
          user_a: {
            displayName: 'User A',
            displayUsername: null,
            name: 'user a',
            photoUrl: null,
            provider: {},
            username: null,

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
            displayName: 'User B',
            displayUsername: null,
            name: 'user b',
            photoUrl: null,
            provider: {},
            username: null,
          },

          user_c: {
            displayName: 'User C',
            displayUsername: null,
            name: 'user c',
            photoUrl: null,
            provider: {},
            username: null,
          },

          user_d: {
            displayName: 'User D',
            displayUsername: null,
            name: 'user d',
            photoUrl: null,
            provider: {},
            username: null,
          },

          user_e: {
            displayName: 'User E',
            displayUsername: null,
            name: 'user e',
            photoUrl: null,
            provider: {},
            username: null,
          },

          user_f: {
            displayName: 'User F',
            displayUsername: null,
            name: 'user f',
            photoUrl: null,
            provider: {},
            username: null,
          },
        },
      },
    },
  };
};
