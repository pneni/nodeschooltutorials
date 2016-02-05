Garbage collection.md

# Garbage Collection

Memory in Javascript is managed automatically by the runtime. The runtime
decides when/if to release any allocated memory. This decision process is called
Garbage Collection.

Every javascript runtime has their own algorithm for garbage collection, but
most use a variation of Mark & Sweep. The Mark & Sweep algorithm works by
marking references to memory (variables, functions, etc) which are still
reachable from active code. Any reference which is not marked, is swept into
the garbage (i.e. the memory is freed).

This concept of marking reachable memory is particulary relevant to closures:

     someFunc()
      var bar
    return inner
         ↑
         |
      inner()
     alert(bar)
         ↑
         ⋮

When the closure inner() is returned from someFunc(), it maintains its
reference to bar. The Mark & Sweep algorithm will mark bar as reachable, and
hence will not garbage collect it.

For inner() to correctly resolve its reference to bar, not only does the
memory for bar need to be kept, but the scope chain which describes how to
reach bar must also be kept.

Once the reference to inner() is no longer required, it can be marked for
garbage collection, which in turn means bar can also be marked, and finally
the entire scope chain can be marked, resulting in the freeing of all the
memory.

In this way, Scope, Scope Chains, Closures, and Garbage Collection are all
closely related.


