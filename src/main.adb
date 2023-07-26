-- @summary demonstration of SPARK with a generic package
--
-- @author John Perry
--
-- @description
-- Test program for our generic package.

-- packages we need

with Euclidean;
with Ada.Text_IO;

procedure Main with
   SPARK_Mode => On
   -- setting to On means SPARK will check this procedure when we run GNAT prove

is

   pragma Warnings (Off, "initialization of ""Default_Width"" has no effect");
   package IO is new Ada.Text_IO.Integer_IO (Num => Integer);
   -- instantiating the generic Integer_IO package to make integer output
   pragma Warnings (Off, "initialization of ""Default_Width"" has no effect");

   function Integer_Size (Value : Integer) return Integer is (abs (Value)) with
      Pre => Value > Integer'First;

   subtype Good_Integer is Integer range Integer'First + 1 .. Integer'Last;
   -- must start at Integer'First + 1, otherwise
   -- proof fails on instantiation, likely because
   -- abs ( Integer'First ) overflows

   package Euclidean_ZZ is new Euclidean
     (Ring_Element => Good_Integer, Zero => 0, Size => Integer_Size);
   -- Euclidean_ZZ instantiates our Euclidean package for the integers.
   -- The package requires definition of the ring element type
   -- and a zero element.
   -- It technically requires "=" or "rem" as well, but Ada allows one to define
   -- default values for generic parameters, in which case
   -- the compiler will substitute those values.

begin

   -- print the gcd of -24 and -16, followed by a new line
   Ada.Text_IO.Put ("This value should be 8 or -8: ");
   IO.Put (Euclidean_ZZ.Gcd (-24, -16), 0);
   Ada.Text_IO.New_Line;

   -- if you uncomment line 46, GNAT prove will (correctly!) report a problem:
   --
   --     medium: precondition might fail
   --       cannot prove B /= 0
   --
   -- IO.Put( Euclidean_ZZ.Gcd( -24, 0 ) );

   -- I could avoid fully qualifying the statements above
   -- if I resorted to a "use" statement;
   -- i.e., "use Euclidean_ZZ" and/or "use Ada.Text_IO.Integer_IO"
   -- (the latter defaults to the Integer type).

end Main;
