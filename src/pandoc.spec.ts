import { parse, Doc } from "./ast";
import { PandocRenderer, PandocParser } from "./pandoc";

describe("PandocParser", () => {
  it("parses some things", () => {
    const json =
      {
        "pandoc-api-version": [
          1,
          22,
          2,
          1
        ],
        "meta": {},
        "blocks": [
          {
            "t": "Para",
            "c": [
              {
                "t": "Strong",
                "c": [
                  {
                    "t": "Str",
                    "c": "hello"
                  }
                ]
              },
              {
                "t": "Space"
              },
              {
                "t": "Link",
                "c": [
                  [
                    "",
                    [
                      "foo"
                    ],
                    []
                  ],
                  [
                    {
                      "t": "Str",
                      "c": "a"
                    },
                    {
                      "t": "Space"
                    },
                    {
                      "t": "Str",
                      "c": "link"
                    }
                  ],
                  [
                    "url",
                    ""
                  ]
                ]
              }
            ]
          },
          {
            "t": "Div",
            "c": [
              [
                "heading",
                [
                  "section"
                ],
                [
                  [
                    "id",
                    "heading"
                  ]
                ]
              ],
              [
                {
                  "t": "Header",
                  "c": [
                    2,
                    [
                      "",
                      [],
                      []
                    ],
                    [
                      {
                        "t": "Str",
                        "c": "heading"
                      }
                    ]
                  ]
                },
                {
                  "t": "BlockQuote",
                  "c": [
                    {
                      "t": "BlockQuote",
                      "c": [
                        {
                          "t": "Para",
                          "c": [
                            {
                              "t": "Str",
                              "c": "block"
                            },
                            {
                              "t": "Space"
                            },
                            {
                              "t": "Str",
                              "c": "quote"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "t": "Table",
                  "c": [
                    [
                      "",
                      [],
                      []
                    ],
                    [
                      null,
                      [
                        {
                          "t": "Plain",
                          "c": [
                            {
                              "t": "Str",
                              "c": "A"
                            },
                            {
                              "t": "Space"
                            },
                            {
                              "t": "Str",
                              "c": "caption"
                            },
                            {
                              "t": "Space"
                            },
                            {
                              "t": "Emph",
                              "c": [
                                {
                                  "t": "Str",
                                  "c": "with"
                                },
                                {
                                  "t": "Space"
                                },
                                {
                                  "t": "Str",
                                  "c": "emph"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    ],
                    [
                      [
                        {
                          "t": "AlignDefault"
                        },
                        {
                          "t": "ColWidthDefault"
                        }
                      ],
                      [
                        {
                          "t": "AlignDefault"
                        },
                        {
                          "t": "ColWidthDefault"
                        }
                      ]
                    ],
                    [
                      [
                        "",
                        [],
                        []
                      ],
                      [
                        [
                          [
                            "",
                            [],
                            []
                          ],
                          [
                            [
                              [
                                "",
                                [],
                                []
                              ],
                              {
                                "t": "AlignRight"
                              },
                              1,
                              1,
                              [
                                {
                                  "t": "Plain",
                                  "c": [
                                    {
                                      "t": "Str",
                                      "c": "table"
                                    }
                                  ]
                                }
                              ]
                            ],
                            [
                              [
                                "",
                                [],
                                []
                              ],
                              {
                                "t": "AlignDefault"
                              },
                              1,
                              1,
                              [
                                {
                                  "t": "Plain",
                                  "c": [
                                    {
                                      "t": "Str",
                                      "c": "cell"
                                    }
                                  ]
                                }
                              ]
                            ]
                          ]
                        ]
                      ]
                    ],
                    [
                      [
                        [
                          "",
                          [],
                          []
                        ],
                        0,
                        [],
                        [
                          [
                            [
                              "",
                              [],
                              []
                            ],
                            [
                              [
                                [
                                  "",
                                  [],
                                  []
                                ],
                                {
                                  "t": "AlignRight"
                                },
                                1,
                                1,
                                [
                                  {
                                    "t": "Plain",
                                    "c": [
                                      {
                                        "t": "Str",
                                        "c": "123"
                                      }
                                    ]
                                  }
                                ]
                              ],
                              [
                                [
                                  "",
                                  [],
                                  []
                                ],
                                {
                                  "t": "AlignDefault"
                                },
                                1,
                                1,
                                [
                                  {
                                    "t": "Plain",
                                    "c": []
                                  }
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ],
                    [
                      [
                        "",
                        [],
                        []
                      ],
                      []
                    ]
                  ]
                },
                {
                  "t": "OrderedList",
                  "c": [
                    [
                      1,
                      {
                        "t": "Decimal"
                      },
                      {
                        "t": "Period"
                      }
                    ],
                    [
                      [
                        {
                          "t": "Plain",
                          "c": [
                            {
                              "t": "Str",
                              "c": "one"
                            }
                          ]
                        },
                        {
                          "t": "OrderedList",
                          "c": [
                            [
                              2,
                              {
                                "t": "LowerRoman"
                              },
                              {
                                "t": "Period"
                              }
                            ],
                            [
                              [
                                {
                                  "t": "Plain",
                                  "c": [
                                    {
                                      "t": "Str",
                                      "c": "two"
                                    }
                                  ]
                                }
                              ]
                            ]
                          ]
                        }
                      ]
                    ]
                  ]
                },
                {
                  "t": "DefinitionList",
                  "c": [
                    [
                      [
                        {
                          "t": "Str",
                          "c": "def"
                        }
                      ],
                      [
                        [
                          {
                            "t": "Para",
                            "c": [
                              {
                                "t": "Str",
                                "c": "list"
                              }
                            ]
                          }
                        ]
                      ]
                    ]
                  ]
                }
              ]
            ]
          }
        ]
      };
    const ast = new PandocParser().fromPandoc(json);
    expect(ast).toStrictEqual(
      {
        "tag": "doc",
        "references": {},
        "footnotes": {},
        "children": [
          {
            "tag": "para",
            "children": [
              {
                "tag": "strong",
                "children": [
                  {
                    "tag": "str",
                    "text": "hello"
                  }
                ]
              },
              {
                "tag": "str",
                "text": " "
              },
              {
                "tag": "link",
                "destination": "url",
                "children": [
                  {
                    "tag": "str",
                    "text": "a link"
                  }
                ],
                "attributes": {
                  "class": "foo"
                }
              }
            ]
          },
          {
            "tag": "section",
            "children": [
              {
                "tag": "heading",
                "level": 2,
                "children": [
                  {
                    "tag": "str",
                    "text": "heading"
                  }
                ]
              },
              {
                "tag": "blockquote",
                "children": [
                  {
                    "tag": "blockquote",
                    "children": [
                      {
                        "tag": "para",
                        "children": [
                          {
                            "tag": "str",
                            "text": "block quote"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "table",
                "children": [
                  {
                    "tag": "caption",
                    "children": [
                      {
                        "tag": "str",
                        "text": "A caption "
                      },
                      {
                        "tag": "emph",
                        "children": [
                          {
                            "tag": "str",
                            "text": "with emph"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "row",
                    "children": [
                      {
                        "tag": "cell",
                        "children": [
                          {
                            "tag": "str",
                            "text": "table"
                          }
                        ],
                        "head": true,
                        "align": "right"
                      },
                      {
                        "tag": "cell",
                        "children": [
                          {
                            "tag": "str",
                            "text": "cell"
                          }
                        ],
                        "head": true,
                        "align": "default"
                      }
                    ],
                    "head": true
                  },
                  {
                    "tag": "row",
                    "children": [
                      {
                        "tag": "cell",
                        "children": [
                          {
                            "tag": "str",
                            "text": "123"
                          }
                        ],
                        "head": false,
                        "align": "right"
                      },
                      {
                        "tag": "cell",
                        "children": [],
                        "head": false,
                        "align": "default"
                      }
                    ],
                    "head": false
                  }
                ]
              },
              {
                "tag": "list",
                "style": "1.",
                "children": [
                  {
                    "tag": "list_item",
                    "children": [
                      {
                        "tag": "para",
                        "children": [
                          {
                            "tag": "str",
                            "text": "one"
                          }
                        ]
                      },
                      {
                        "tag": "list",
                        "style": "i.",
                        "children": [
                          {
                            "tag": "list_item",
                            "children": [
                              {
                                "tag": "para",
                                "children": [
                                  {
                                    "tag": "str",
                                    "text": "two"
                                  }
                                ]
                              }
                            ]
                          }
                        ],
                        "start": 2,
                        "tight": true
                      }
                    ]
                  }
                ],
                "start": 1,
                "tight": true
              },
              {
                "tag": "list",
                "style": ":",
                "children": [
                  {
                    "tag": "definition_list_item",
                    "children": [
                      {
                        "tag": "term",
                        "children": [
                          {
                            "tag": "str",
                            "text": "def"
                          }
                        ]
                      },
                      {
                        "tag": "definition",
                        "children": [
                          {
                            "tag": "para",
                            "children": [
                              {
                                "tag": "str",
                                "text": "list"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "tight": false
              }
            ],
            "attributes": {
              "id": "heading"
            }
          }
        ]
      }

    );

  });
});
describe("PandocRenderer", () => {
  it("renders some things", () => {
    const inp = `*hello* [a link](url){.foo}

## heading

> > block quote

| table | cell |
|------:|------|
| 123   | |
^ A caption _with emph_

1. one

   ii. two

: def

  list
`;
    const ast = parse(inp, {});
    expect(new PandocRenderer(ast, () => {}).toPandoc()).toStrictEqual(
      {
        "pandoc-api-version": [
          1,
          22,
          2,
          1
        ],
        "meta": {},
        "blocks": [
          {
            "t": "Para",
            "c": [
              {
                "t": "Strong",
                "c": [
                  {
                    "t": "Str",
                    "c": "hello"
                  }
                ]
              },
              {
                "t": "Space"
              },
              {
                "t": "Link",
                "c": [
                  [
                    "",
                    [
                      "foo"
                    ],
                    []
                  ],
                  [
                    {
                      "t": "Str",
                      "c": "a"
                    },
                    {
                      "t": "Space"
                    },
                    {
                      "t": "Str",
                      "c": "link"
                    }
                  ],
                  [
                    "url",
                    ""
                  ]
                ]
              }
            ]
          },
          {
            "t": "Div",
            "c": [
              [
                "heading",
                [
                  "section"
                ],
                [
                  [
                    "id",
                    "heading"
                  ]
                ]
              ],
              [
                {
                  "t": "Header",
                  "c": [
                    2,
                    [
                      "",
                      [],
                      []
                    ],
                    [
                      {
                        "t": "Str",
                        "c": "heading"
                      }
                    ]
                  ]
                },
                {
                  "t": "BlockQuote",
                  "c": [
                    {
                      "t": "BlockQuote",
                      "c": [
                        {
                          "t": "Para",
                          "c": [
                            {
                              "t": "Str",
                              "c": "block"
                            },
                            {
                              "t": "Space"
                            },
                            {
                              "t": "Str",
                              "c": "quote"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "t": "Table",
                  "c": [
                    [
                      "",
                      [],
                      []
                    ],
                    [
                      null,
                      [
                        {
                          "t": "Plain",
                          "c": [
                            {
                              "t": "Str",
                              "c": "A"
                            },
                            {
                              "t": "Space"
                            },
                            {
                              "t": "Str",
                              "c": "caption"
                            },
                            {
                              "t": "Space"
                            },
                            {
                              "t": "Emph",
                              "c": [
                                {
                                  "t": "Str",
                                  "c": "with"
                                },
                                {
                                  "t": "Space"
                                },
                                {
                                  "t": "Str",
                                  "c": "emph"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    ],
                    [
                      [
                        {
                          "t": "AlignDefault"
                        },
                        {
                          "t": "ColWidthDefault"
                        }
                      ],
                      [
                        {
                          "t": "AlignDefault"
                        },
                        {
                          "t": "ColWidthDefault"
                        }
                      ]
                    ],
                    [
                      [
                        "",
                        [],
                        []
                      ],
                      [
                        [
                          [
                            "",
                            [],
                            []
                          ],
                          [
                            [
                              [
                                "",
                                [],
                                []
                              ],
                              {
                                "t": "AlignRight"
                              },
                              1,
                              1,
                              [
                                {
                                  "t": "Plain",
                                  "c": [
                                    {
                                      "t": "Str",
                                      "c": "table"
                                    }
                                  ]
                                }
                              ]
                            ],
                            [
                              [
                                "",
                                [],
                                []
                              ],
                              {
                                "t": "AlignDefault"
                              },
                              1,
                              1,
                              [
                                {
                                  "t": "Plain",
                                  "c": [
                                    {
                                      "t": "Str",
                                      "c": "cell"
                                    }
                                  ]
                                }
                              ]
                            ]
                          ]
                        ]
                      ]
                    ],
                    [
                      [
                        [
                          "",
                          [],
                          []
                        ],
                        0,
                        [],
                        [
                          [
                            [
                              "",
                              [],
                              []
                            ],
                            [
                              [
                                [
                                  "",
                                  [],
                                  []
                                ],
                                {
                                  "t": "AlignRight"
                                },
                                1,
                                1,
                                [
                                  {
                                    "t": "Plain",
                                    "c": [
                                      {
                                        "t": "Str",
                                        "c": "123"
                                      }
                                    ]
                                  }
                                ]
                              ],
                              [
                                [
                                  "",
                                  [],
                                  []
                                ],
                                {
                                  "t": "AlignDefault"
                                },
                                1,
                                1,
                                [
                                  {
                                    "t": "Plain",
                                    "c": []
                                  }
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ],
                    [
                      [
                        "",
                        [],
                        []
                      ],
                      []
                    ]
                  ]
                },
                {
                  "t": "OrderedList",
                  "c": [
                    [
                      1,
                      {
                        "t": "Decimal"
                      },
                      {
                        "t": "Period"
                      }
                    ],
                    [
                      [
                        {
                          "t": "Plain",
                          "c": [
                            {
                              "t": "Str",
                              "c": "one"
                            }
                          ]
                        },
                        {
                          "t": "OrderedList",
                          "c": [
                            [
                              2,
                              {
                                "t": "LowerRoman"
                              },
                              {
                                "t": "Period"
                              }
                            ],
                            [
                              [
                                {
                                  "t": "Plain",
                                  "c": [
                                    {
                                      "t": "Str",
                                      "c": "two"
                                    }
                                  ]
                                }
                              ]
                            ]
                          ]
                        }
                      ]
                    ]
                  ]
                },
                {
                  "t": "DefinitionList",
                  "c": [
                    [
                      [
                        {
                          "t": "Str",
                          "c": "def"
                        }
                      ],
                      [
                        [
                          {
                            "t": "Para",
                            "c": [
                              {
                                "t": "Str",
                                "c": "list"
                              }
                            ]
                          }
                        ]
                      ]
                    ]
                  ]
                }
              ]
            ]
          }
        ]
      }

    );

  });
});
