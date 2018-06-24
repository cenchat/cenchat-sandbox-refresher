module.exports = function fixtureData(db) {
  return {
    __collection__: {
      betaTesters: {
        __doc__: {
          QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
            monthlyViews: 'lt-1m',
            status: 'approved',
            website: 'https://site-a.com',
          },
        },
      },

      comments: {
        __doc__: {
          comment_a: {
            attachments: null,
            author: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
            createdOn: new Date('2017-01-01'),
            isAskMeAnything: true,
            isDeleted: false,
            page: db.doc('pages/site_a__page_a'),
            replyTo: null,
            root: null,
            site: db.doc('sites/site_a'),
            status: 'approved',
            taggedEntities: null,
            text: 'Foobar',
          },

          comment_b: {
            attachments: null,
            author: db.doc('users/p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
            createdOn: new Date('2017-01-01'),
            isAskMeAnything: false,
            isDeleted: false,
            page: db.doc('pages/site_a__page_a'),
            replyTo: db.doc('comments/comment_a'),
            root: db.doc('comments/comment_a'),
            site: db.doc('sites/site_a'),
            status: 'approved',
            taggedEntities: null,
            text: 'Hello World',
          },

          comment_c: {
            attachments: [{ id: 'sticker_a1', type: 'sticker' }],
            author: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
            createdOn: new Date('2017-01-01'),
            isAskMeAnything: false,
            isDeleted: false,
            page: db.doc('pages/site_a__page_a'),
            replyTo: db.doc('comments/comment_b'),
            root: db.doc('comments/comment_a'),
            site: db.doc('sites/site_a'),
            status: 'approved',
            taggedEntities: null,
            text: null,
          },

          comment_d: {
            attachments: null,
            author: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
            createdOn: new Date('2017-01-01'),
            isAskMeAnything: false,
            isDeleted: true,
            page: db.doc('pages/site_a__page_a'),
            replyTo: null,
            root: null,
            site: db.doc('sites/site_a'),
            status: 'approved',
            taggedEntities: null,
            text: null,
          },

          comment_e: {
            attachments: null,
            author: db.doc('users/p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
            createdOn: new Date('2017-01-01'),
            isAskMeAnything: false,
            isDeleted: false,
            page: db.doc('pages/site_a__page_a'),
            replyTo: db.doc('comments/comment_a'),
            root: db.doc('comments/comment_a'),
            site: db.doc('sites/site_a'),
            status: 'rejected',
            taggedEntities: null,
            text: 'Hello World',
          },
        },
      },

      facebookIds: {
        __doc__: {
          facebookid_a: {
            cloudFirestoreReference: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
          },
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

      userMetaInfos: {
        __doc__: {
          QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
            accessToken: { facebook: '12345' },
            hasNewNotification: false,
            notificationTokens: [],
          },
        },
      },

      usernames: {
        __doc__: {
          username_a: {
            cloudFirestoreReference: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
          },
        },
      },

      users: {
        __doc__: {
          QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
            displayName: 'Test User 1',
            displayUsername: 'username_a',
            name: 'test user 1',
            photoUrl: 'test_user1.jpg',
            provider: { facebook: 'facebookid_a' },
            username: 'username_a',

            __collection__: {
              followingComments: {
                __doc__: {
                  comment_b: {
                    attachments: null,
                    author: db.doc('users/p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
                    createdOn: new Date('2017-01-01'),
                    isAskMeAnything: false,
                    isDeleted: false,
                    page: db.doc('pages/site_a__page_a'),
                    replyTo: db.doc('comments/comment_a'),
                    root: db.doc('comments/comment_a'),
                    site: db.doc('sites/site_a'),
                    status: 'approved',
                    taggedEntities: null,
                    text: 'Hello World',
                  },

                  comment_e: {
                    attachments: null,
                    author: db.doc('users/p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
                    createdOn: new Date('2017-01-01'),
                    isAskMeAnything: false,
                    isDeleted: false,
                    page: db.doc('pages/site_a__page_a'),
                    replyTo: db.doc('comments/comment_a'),
                    root: db.doc('comments/comment_a'),
                    site: db.doc('sites/site_a'),
                    status: 'rejected',
                    taggedEntities: null,
                    text: 'Hello World',
                  },
                },
              },

              followers: {
                __doc__: {
                  p6dbUKSNnrh4QI4MDuZCMOs07Vt2: {
                    cloudFirestoreReference: db.doc('users/p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
                    name: 'test user 2',
                  },
                },
              },

              followings: {
                __doc__: {
                  p6dbUKSNnrh4QI4MDuZCMOs07Vt2: {
                    cloudFirestoreReference: db.doc('users/p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
                    name: 'test user 2',
                  },
                },
              },

              sitesAsAdmin: {
                __doc__: {
                  site_a: {
                    cloudFirestoreReference: db.doc('sites/site_a'),
                  },

                  site_b: {
                    cloudFirestoreReference: db.doc('sites/site_b'),
                  },
                },
              },
            },
          },

          p6dbUKSNnrh4QI4MDuZCMOs07Vt2: {
            displayName: 'Test User 2',
            displayUsername: null,
            name: 'test user 2',
            photoUrl: null,
            provider: {},
            shortBio: null,
            username: null,

            __collection__: {
              followingComments: {
                __doc__: {
                  comment_a: {
                    attachments: null,
                    author: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    createdOn: new Date('2017-01-01'),
                    isAskMeAnything: true,
                    isDeleted: false,
                    page: db.doc('pages/site_a__page_a'),
                    replyTo: null,
                    root: null,
                    site: db.doc('sites/site_a'),
                    status: 'approved',
                    taggedEntities: null,
                    text: 'Foobar',
                  },

                  comment_c: {
                    attachments: [{ id: 'sticker_a1', type: 'sticker' }],
                    author: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    createdOn: new Date('2017-01-01'),
                    isAskMeAnything: false,
                    isDeleted: false,
                    page: db.doc('pages/site_a__page_a'),
                    replyTo: db.doc('comments/comment_b'),
                    root: db.doc('comments/comment_a'),
                    site: db.doc('sites/site_a'),
                    status: 'approved',
                    taggedEntities: null,
                    text: null,
                  },

                  comment_d: {
                    attachments: null,
                    author: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    createdOn: new Date('2017-01-01'),
                    isAskMeAnything: false,
                    isDeleted: true,
                    page: db.doc('pages/site_a__page_a'),
                    replyTo: null,
                    root: null,
                    site: db.doc('sites/site_a'),
                    status: 'approved',
                    taggedEntities: null,
                    text: null,
                  },
                },
              },

              followers: {
                __doc__: {
                  QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
                    cloudFirestoreReference: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    name: 'test user 1',
                  },
                },
              },

              followings: {
                __doc__: {
                  QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
                    cloudFirestoreReference: db.doc('users/QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    name: 'test user 1',
                  },
                },
              },
            },
          },

          hLDKdOlRTaO6kQROMAcBEzscFAk1: {
            displayName: 'Test User 3',
            displayUsername: null,
            name: 'test user 3',
            photoUrl: null,
            provider: {},
            shortBio: null,
            username: null,
          },
        },
      },
    },
  };
};
