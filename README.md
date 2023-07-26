# Euclidean

A generic package with a generic function
to compute a gcd of two elements of a Euclidean Ring
_and_ to use SPARK to prove correctness of output.

See [`share/euclidean/html/index.html`](share/euclidean/html/index.html) for automatically generated documentation.

## Proving, building, running,, documenting

### Proving

* `alr with gnatprove` if not already installed and using Alire
* `gnatprove`, or prove from SPARK menu in GNAT Studio

### Building

* `alr build` if using Alire
* `gnatmake -P euclidean` alternately

### Running

* `alr run` if using Alire
* `bin/main` on my machine

### Documentation`

* `gnatdoc -l -w --custom-tags-definition=more_tags.py -P euclidean`

## Versions
* 2023-07-26
  Finally compiles with something that resembles correctness:
  * `Gcd'Result` &ne; 0
  * `Gcd'Result` &le; `A`
  * `Gcd'Result` &le; `B`

  Getting `Gcd'Result rem A = Zero`, and the same for `B`, is impractical at the moment.
