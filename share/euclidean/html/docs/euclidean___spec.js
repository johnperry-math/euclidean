GNATdoc.Documentation = {
  "label": "Euclidean",
  "qualifier": "",
  "summary": [
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "span",
          "text": "a generic package with a generic function to compute a gcd\n"
        },
        {
          "kind": "span",
          "text": "of two elements of a Euclidean Ring\n"
        }
      ]
    }
  ],
  "description": [
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "span",
          "text": "This package implements the Euclidean Algorithm for a generic,\n"
        },
        {
          "kind": "span",
          "text": "user-specified Euclidean Ring.\n"
        },
        {
          "kind": "span",
          "text": "The main purpose is to demonstrate how SPARK 2014 can prove its correctness.\n"
        },
        {
          "kind": "span",
          "text": "The main feature is the Gcd function, which returns a greatest common divisor\n"
        },
        {
          "kind": "span",
          "text": "(gcd) of its inputs.\n"
        }
      ]
    },
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "span",
          "text": "Why \"a\" gcd instead of \"the\" gcd?\n"
        },
        {
          "kind": "span",
          "text": "The algebra definition of a gcd is as follows:\n"
        }
      ]
    },
    {
      "kind": "code",
      "children": [
        {
          "number": 1,
          "children": [
            {
              "kind": "span",
              "text": "D = gcd(A,B)"
            }
          ]
        },
        {
          "number": 2,
          "children": [
            {
              "kind": "span",
              "text": "    iff"
            }
          ]
        },
        {
          "number": 3,
          "children": [
            {
              "kind": "span",
              "text": "D divides both A and B"
            }
          ]
        },
        {
          "number": 4,
          "children": [
            {
              "kind": "span",
              "text": "    and"
            }
          ]
        },
        {
          "number": 5,
          "children": [
            {
              "kind": "span",
              "text": "for any C that also divides A and B, C divides D."
            }
          ]
        },
        {
          "number": 6,
          "children": [
            {
              "kind": "span",
              "text": ""
            }
          ]
        }
      ]
    },
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "span",
          "text": "As a result, you can obtain some unexpected results.\n"
        },
        {
          "kind": "span",
          "text": "For instance, gcd(-24,-16) can be either 8 or -8.\n"
        }
      ]
    },
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "html",
          "html": "<h3>Generic parameters</h3>",
          "children": [
          ]
        },
        {
          "kind": "ul",
          "children": [
            {
              "kind": "li",
              "children": [
                {
                  "kind": "span",
                  "text": "Ring_Element\n"
                },
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "specifies the type of objects for which we want to compute gcd's;\n"
                    },
                    {
                      "kind": "span",
                      "text": "algebraically speaking, this should be a Euclidean Ring.\n"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "li",
              "children": [
                {
                  "kind": "span",
                  "text": "\"=\"\n"
                },
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "a function that returns\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>True</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " iff its two parameters are equivalent\n"
                    },
                    {
                      "kind": "span",
                      "text": "in the given\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Ring_Element</tt>",
                      "children": [
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "kind": "li",
              "children": [
                {
                  "kind": "span",
                  "text": "Size\n"
                },
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "a function that takes a\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Ring_Element</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " as a parameter\n"
                    },
                    {
                      "kind": "span",
                      "text": "and returns an integer result that in some way measures\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Value's</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " size\n"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "li",
              "children": [
                {
                  "kind": "span",
                  "text": "Zero\n"
                },
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "a\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Ring_Element</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " that serves as an additive identity; i.e., 0\n"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "li",
              "children": [
                {
                  "kind": "span",
                  "text": "\"rem\"\n"
                },
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "a function that accepts two nonzero\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Ring_Elements'</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " parameters and returns\n"
                    },
                    {
                      "kind": "span",
                      "text": "either\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Zero</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " or\n"
                    },
                    {
                      "kind": "span",
                      "text": "another\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Ring_Element</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " whose\n"
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Ring_Element</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "html",
                      "html": "<tt>Size</tt>",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " is no larger than the parameters'\n"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Gcd",
          "qualifier": "",
          "line": 75,
          "column": 13,
          "src": "srcs/euclidean.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 75,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Gcd",
                      "href": "docs/euclidean___spec.html#L75C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "A",
                      "href": "docs/euclidean___spec.html#L75C18"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "B",
                      "href": "docs/euclidean___spec.html#L75C21"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ring_Element"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ring_Element"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "with"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 76,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      Pre  => (A /= Zero "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "then"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " B /= Zero "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "then"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Size (B) < Size (A)),"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 77,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      Post =>"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 78,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      (Gcd'Result /= Zero "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "then"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Size (Gcd'Result) <= Size (A)"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 79,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "and"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "then"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " Size (Gcd'Result) <= Size (B))"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "A",
              "line": 75,
              "column": 18,
              "type": {
                "label": "Euclidean.Ring_Element",
                "docHref": "docs/euclidean___spec.html#L43C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "nonzero ring element\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "B",
              "line": 75,
              "column": 21,
              "type": {
                "label": "Euclidean.Ring_Element",
                "docHref": "docs/euclidean___spec.html#L43C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "nonzero ring element\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "a greatest common divisor (gcd) of A and B\n"
                  }
                ]
              }
            ]
          }
        }
      ],
      "label": "Subprograms"
    }
  ]
};