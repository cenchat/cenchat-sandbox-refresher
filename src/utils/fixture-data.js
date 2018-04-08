module.exports = function fixtureData(db) {
  return {
    __collection__: {
      comments: {
        __doc__: {
          comment_a: {
            attachments: null,
            author: db.collection('users').doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
            createdOn: new Date('2017-01-01'),
            isAskMeAnything: false,
            isDeleted: false,
            page: db.collection('pages').doc('site_a__page_a'),
            replyTo: null,
            root: null,
            taggedEntities: null,
            text: 'Foobar',
          },

          comment_b: {
            attachments: null,
            author: db.collection('users').doc('p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
            createdOn: new Date('2017-01-01'),
            isAskMeAnything: false,
            isDeleted: false,
            page: db.collection('pages').doc('site_a__page_a'),
            replyTo: db.collection('comments').doc('comment_a'),
            root: db.collection('comments').doc('comment_a'),
            taggedEntities: null,
            text: 'Hello World',
          },

          comment_c: {
            attachments: [{ id: 'sticker_a1', type: 'sticker' }],
            author: db.collection('users').doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
            createdOn: new Date('2017-01-01'),
            isAskMeAnything: false,
            isDeleted: false,
            page: db.collection('pages').doc('site_a__page_a'),
            replyTo: db.collection('comments').doc('comment_b'),
            root: db.collection('comments').doc('comment_a'),
            taggedEntities: null,
            text: null,
          },
        },
      },

      facebookIds: {
        __doc__: {
          facebookid_a: {
            cloudFirestoreReference: db.collection('users').doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
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
            from: db.collection('users').doc('p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
            to: db.collection('users').doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
          },

          notification_b: {
            dataMessage: null,
            displayMessage: {
              body: null,
              title: 'Test User 1 started following you',
            },
            createdOn: new Date('2017-01-01'),
            type: 'follow',
            from: db.collection('users').doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
            to: db.collection('users').doc('p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
          },
        },
      },

      pages: {
        __doc__: {
          site_a__page_a: {
            createdOn: new Date('2017-01-01'),
            description: null,
            image: null,
            site: db.collection('sites').doc('site_a'),
            slug: '%2F',
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
                    cloudFirestoreReference: db
                      .collection('users')
                      .doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
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
            facebookAccessToken: '12345',
            hasNewNotification: false,
          },
        },
      },

      usernames: {
        __doc__: {
          username_a: {
            cloudFirestoreReference: db.collection('users').doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
          },
        },
      },

      users: {
        __doc__: {
          QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
            displayName: 'Test User 1',
            displayUsername: 'username_a',
            facebookId: 'facebookid_a',
            photoUrl: 'test_user1.jpg',
            username: 'username_a',

            __collection__: {
              followingComments: {
                __doc__: {
                  comment_b: {
                    attachments: null,
                    author: db.collection('users').doc('p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
                    createdOn: new Date('2017-01-01'),
                    isAskMeAnything: false,
                    isDeleted: false,
                    page: db.collection('pages').doc('site_a__page_a'),
                    replyTo: db.collection('comments').doc('comment_a'),
                    root: db.collection('comments').doc('comment_a'),
                    taggedEntities: null,
                    text: 'Hello World',
                  },
                },
              },

              followers: {
                __doc__: {
                  p6dbUKSNnrh4QI4MDuZCMOs07Vt2: {
                    cloudFirestoreReference: db
                      .collection('users')
                      .doc('p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
                  },
                },
              },

              followings: {
                __doc__: {
                  p6dbUKSNnrh4QI4MDuZCMOs07Vt2: {
                    cloudFirestoreReference: db
                      .collection('users')
                      .doc('p6dbUKSNnrh4QI4MDuZCMOs07Vt2'),
                  },
                },
              },

              sitesAsAdmin: {
                __doc__: {
                  site_a: {
                    cloudFirestoreReference: db.collection('sites').doc('site_a'),
                  },
                },
              },
            },
          },

          p6dbUKSNnrh4QI4MDuZCMOs07Vt2: {
            displayName: 'Test User 2',
            displayUsername: null,
            photoUrl: null,
            username: null,

            __collection__: {
              followingComments: {
                __doc__: {
                  comment_a: {
                    attachments: null,
                    author: db.collection('users').doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    createdOn: new Date('2017-01-01'),
                    isAskMeAnything: false,
                    isDeleted: false,
                    page: db.collection('pages').doc('site_a__page_a'),
                    replyTo: null,
                    root: null,
                    taggedEntities: null,
                    text: 'Foobar',
                  },

                  comment_c: {
                    attachments: [{ id: 'sticker_a1', type: 'sticker' }],
                    author: db.collection('users').doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                    createdOn: new Date('2017-01-01'),
                    isAskMeAnything: false,
                    isDeleted: false,
                    page: db.collection('pages').doc('site_a__page_a'),
                    replyTo: db.collection('comments').doc('comment_b'),
                    root: db.collection('comments').doc('comment_a'),
                    taggedEntities: null,
                    text: null,
                  },
                },
              },

              followers: {
                __doc__: {
                  QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
                    cloudFirestoreReference: db
                      .collection('users')
                      .doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                  },
                },
              },

              followings: {
                __doc__: {
                  QA8FnqTTt2NpIKl2VDHWqYwQKvQ2: {
                    cloudFirestoreReference: db
                      .collection('users')
                      .doc('QA8FnqTTt2NpIKl2VDHWqYwQKvQ2'),
                  },
                },
              },
            },
          },

          hLDKdOlRTaO6kQROMAcBEzscFAk1: {
            displayName: 'Test User 3',
            displayUsername: null,
            photoUrl: null,
            username: null,
          },
        },
      },
    },
  };
};
