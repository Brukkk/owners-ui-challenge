# owners-ui-challenge

## Tasks

- [✔️] Init repo.
- [✔️] Write task flow.
- [✔️] Install initial dependencies React-ts, MUI, Tailwind, Prettier.
- [✔️] Configure MUI-tailwind interoperability.
- [✔️] Dump the initial content into the page as big raw content.
- [✔️] Use MUI components and adapt them with tailwind (No theming, direct modifications from figma).
- [✔️] Reusable components and layouts.
- [✔️] Install Zustand.
- [✔️] Generate fake json and types for Event's section.
- [✔️] Break down zustand stores into data structure and interactivity flow (data, setters).
- [✔️] Configure Events stores with fake json data.
- [✔️] Install Framer Motion and create animations while components mount and exit.
- [✔️] Do the same for the Task's section.

## Bonus

- [❌] Zustand calendar-events and reorder interactivity
- [✔️] Zustand cancel-event interactivity
- [✔️] Zustand tasks interactivity

### Improvements for the future

1. Bundle size could be improved overall. I will definitely try in the future [Shadcn UI](https://ui.shadcn.com/) to not have a component library from which we import.

2. MUI has a lot of prebuilt CSS and some complex components which can be difficult to access the nested simple ones to style. Meanwhile, Shadcn is built on Radix + Tailwind so it has all the accessibility + you owned reusable components with the best functionality that Tailwind provides [(clsx + twMerge)](<(https://www.google.com)>)

3. Tailwind gives you a lot of flexibility and the ability to not feel guilty when copy+paste, more info [here](https://tailwindcss.com/docs/reusing-styles). I didn't want to modify MUI nor Tailwind design system due to the 72 hour challenge’s duration but in a longer project I would definitely bother to represent the custom desired style system before starting.

4. I had trouble and lack of understanding in the react component life-cicle when trying to mount async zustand's store and manage a loading state. One way I could improve is trying with next js and setting an API although the state manager wouldn't be needed in that case.

5. Some animations weren't as precise as I would like them to see and I already have a great passion for Framer Motion. Maybe for not so complex animations It would be nice to learn a lighter weight library.
