# Create-task-piano
Making a piano in website

So, I need to make a piano however, idk if i want to use python or js yet because they've both got things i gotta learn if I want to do it
either I learn js or i learn how to use pygame

Pros/cons of both:

pygame-
    it's a game thing so it'll be kind of easy to make ui
    i already know some python so it wouldn't be too much work, just learning pygame itself
    have a bit of extra steps to learn to use it

Js-
    easier to implement in website
    already know html and some css so it's doable
    don't know js

    We will use Js, which means i will learn (had to learn something in both anyway tho)

Here's my plan with the stuff I need:

First chunk i need done-
    just adding all the sound notes
    Might use dictionary to add the notes? list would be very long
    Instructions so user knows what to do rather than be lost

Second chunk-
    add the triggers
        so there's either keyboard or like clicks
    link sounds to those triggers
    I also need a ui, otherwise, how can people see the piano and play it?
    the ui would be buttons, i could use the keyboard too instead of making some whole new system
        i saw one that only used the home row so I'll copy that instead of invading the whole keyboard
        that way other keys can still be used and the mouse works so they can leave with no difficulty
    Saw that someone added hints for notes, that could be very useful

Third chunk-
    "moving/scrolling" through notes so i get small interface but big piano
        which is good, i don't want to show a million notes at a time
    Mixing/sorting keys??
        this will be harder to implement but I could do it on the sheet music stuff or just for fun
        need it tho
    Sheet music stuff
        this also needs ui and a way for the user to add notes to the thing and then play when they're done
        it could just be either use the piano or add it's own thing so for ex. someone knew the notes to a song off the top of their head
        then they could just add that instead of going through the piano one note at a time but only if there is enough time to make this

Ok, notes stuff about pianos that you don't know:
    Alright, notes only go from C,D,E,F,G,A,B and then loops back around
        those are the white ones
    Sharp notes are C#/Db, D#/Eb, F#/Gb, G#/Ab, A#/Bb
        these are called accidentals apparently because they are either sharp or flat, ain't that nice
    Also apparently some of the white keys could also be sharp or flat, it's just also one of the other letters
    pianos are nuts
    ok, now I need to find where to get audio of these wacky notes
    We could try some midi stuff cause that might be easier, we'll see