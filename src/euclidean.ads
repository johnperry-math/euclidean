-- @summary a generic package with a generic function to compute a gcd
-- of two elements of a Euclidean Ring
--
-- @description
-- This package implements the Euclidean Algorithm for a generic,
-- user-specified Euclidean Ring.
-- The main purpose is to demonstrate how SPARK 2014 can prove its correctness.
-- The main feature is the Gcd function, which returns a greatest common divisor
-- (gcd) of its inputs.
--
-- Why "a" gcd instead of "the" gcd?
-- The algebra definition of a gcd is as follows:
--
--     D = gcd(A,B)
--         iff
--     D divides both A and B
--         and
--     for any C that also divides A and B, C divides D.
--
-- As a result, you can obtain some unexpected results.
-- For instance, gcd(-24,-16) can be either 8 or -8.
--
-- @generics
-- - Ring_Element
--   specifies the type of objects for which we want to compute gcd's;
--   algebraically speaking, this should be a Euclidean Ring.
-- - "="
--   a function that returns @code True iff its two parameters are equivalent
--   in the given @code Ring_Element
-- - Size
--   a function that takes a @code Ring_Element as a parameter
--   and returns an integer result that in some way measures @code Value's size
-- - Zero
--   a @code Ring_Element that serves as an additive identity; i.e., 0
-- - "rem"
--   a function that accepts two nonzero @code Ring_Elements' parameters and returns
--   either @code Zero or
--   another @code Ring_Element whose @code Size is no larger than the parameters'
generic

   type Ring_Element is private;
   -- specifies the type of objects for which we want to compute gcd's;
   -- algebraically speaking, this should be a Euclidean Ring.

   with function "=" (Left, Right : Ring_Element) return Boolean is <>;
   -- should returns True iff Left and Right have the same value.
   -- @param Left a ring element to compare
   -- @param Right a ring element to compare
   -- @return whether Left and Right are equal

   with function Size (Value : Ring_Element) return Integer with
      Pre => Value /= 0;
      -- with the integers it is customary to use `abs`
      -- @param Value a ring element whose size we want
      -- @return the size of Value

   Zero : Ring_Element;
   -- needs to be the ring's additive identity

   with function "rem"
     (Dividend, Divisor : Ring_Element) return Ring_Element is <> with
      Pre  => Divisor /= Zero,
      Post =>
      ("rem"'Result = Zero
       or else
       (Size ("rem"'Result) < Size (Divisor)
        and then Size ("rem"'Result) <= Size (Dividend)));
      -- to guarantee termination, the result should be "smaller" than Divisor.
      -- how precisely this is accomplished can depend on the ring,
      -- and need not be specified.
      -- @return the remainder of dividing the Dividend by the Divisor

package Euclidean is

   function Gcd (A, B : Ring_Element) return Ring_Element with
      Pre  => (A /= Zero and then B /= Zero and then Size (B) < Size (A)),
      Post =>
      (Gcd'Result /= Zero and then Size (Gcd'Result) <= Size (A)
       and then Size (Gcd'Result) <= Size (B));
      -- @return a greatest common divisor (gcd) of A and B
      -- @param A nonzero ring element
      -- @param B nonzero ring element

end Euclidean;
