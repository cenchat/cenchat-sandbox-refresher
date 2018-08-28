module.exports = function fixtureData(db) {
  return {
    __collection__: {
      chats: {
        __doc__: {
          chat_a: {
            creator: db.doc('users/user_b'),
            description: 'User A: Hello',
            isPublicized: true,
            lastActivityTimestamp: new Date('2017-01-01'),
            name: 'Site A',
            page: db.doc('pages/site_a__page_a'),
            publicizedTitle: 'Publicized Chat A',
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

      notifications: {
        __doc__: {
          notification_a: {
            dataMessage: null,
            displayMessage: {
              body: null,
              title: 'Test User 2 started following you',
            },
            createdOn: new Date('2017-01-01'),
            type: 'follow',
            from: db.doc('users/p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
            to: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
          },

          notification_b: {
            dataMessage: null,
            displayMessage: {
              body: null,
              title: 'Test User 1 started following you',
            },
            createdOn: new Date('2017-01-01'),
            type: 'follow',
            from: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
            to: db.doc('users/p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
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
            hostname: 'site-a.com',
            imageUrl: 'site-a.jpg',
            isVerified: true,
            name: 'Site A',
            theme: 'light',

            __collection__: {
              admins: {
                __doc__: {
                  QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
                    cloudFirestoreReference: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    name: 'test user 1',
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
            hostname: 'site-b.com',
            imageUrl: 'site-b.jpg',
            isVerified: true,
            name: 'Site B',
            theme: 'light',

            __collection__: {
              admins: {
                __doc__: {
                  QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
                    cloudFirestoreReference: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    name: 'test user 1',
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
            pack: 'sticker_pack_a',
          },

          sticker_a2: {
            description: 'Much awesome',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2Fy2viRS322OSh1jCY2Z8T%2Fmuch_awesome.png?alt=media&token=6df822af-1451-44ac-aba1-d6986fa2c66f',
            keywords: ['much awesome', 'awesome'],
            pack: 'sticker_pack_a',
          },

          sticker_b1: {
            description: 'Yummy!',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2FGVMKSSnNwzEMuKTh9d3k%2Fyummy.png?alt=media&token=b96af174-045c-4b68-b586-01f341283bd6',
            keywords: ['yummy', 'yum', 'mmm', 'nom nom nom'],
            pack: 'sticker_pack_b',
          },

          sticker_b2: {
            description: 'Have you seen this?',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/cenchat-prod.appspot.com/o/stickers%2FGVMKSSnNwzEMuKTh9d3k%2Fhave_you_seen_this.png?alt=media&token=c1b63b7e-fcdf-40f5-89f0-b6a8a92f2686',
            keywords: ['have you seen this?', 'check this out', 'look'],
            pack: 'sticker_pack_b',
          },
        },
      },

      userMetaInfos: {
        __doc__: {
          user_a: {
            accessToken: null,
            hasNewNotification: false,
            notificationTokens: null,
          },

          user_b: {
            accessToken: null,
            hasNewNotification: false,
            notificationTokens: null,
          },
        },
      },

      users: {
        __doc__: {
          user_a: {
            displayName: 'User_A',
            name: 'user a',
            photoUrl: null,
            provider: null,

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
            displayName: 'user_b',
            name: 'user b',
            photoUrl: null,
            provider: null,
          },
        },
      },
    },
  };
};
