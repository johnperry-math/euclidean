package body Euclidean is

   function Gcd (A, B : Ring_Element) return Ring_Element is

      -- initialize local variables
      M : Ring_Element := A;
      N : Ring_Element := B;

   begin

      -- loop until the smaller is zero
      while N /= Zero loop

         declare
            R : constant Ring_Element := M rem N;
         begin
            M := N;
            N := R;
            pragma Loop_Invariant
              ((M /= Zero and then Size (M) <= Size (A)
                and then Size (M) <= Size (B))
               and then
               (N = Zero
                or else (Size (N) <= Size (A) and then Size (N) <= Size (B))));
         end;

      end loop;

      -- the compiler will give an error if the following statement is missing
      return M;

   end Gcd;

end Euclidean;
