# Coding Style

## File Layout (`src/components/*.js`)

1. Imports
2. Reusabe components needed for the main component
3. Main component (Eg: Addons in addons.js)
4. export default \<MainComponent\>;

## Reusable components

* Do not make a new file for smaller components.
* Smaller, reusable components neeeded in the main components should be added **above** the main component, **not** inside it.
* Use ES6 arrow functions for defining components.

## Spacing

1. **JS:**
    * Use a space after `if`, `for`, `while`, `switch`.
    * Do not use a space after the opening `(` and before the closing `)`.
    * Use a space before and after destructuring objects.
    ```js
        //good
        const { apple, mangoes } = fruits;
        
        //bad
        const {apple, mangoes} = fruits;


        //Same for destructuring props:
        //good
        const BeautifulComponent = ({ prop1, prop2 }) => {}

        //bad
        const UglyComponent = ({prop1, prop2}) => {}
    ```

2. **JSX:**
    * Use a space before the forward slash (`/`) of a self-closing tag
    ```js
    //good
    <Foo />

    //bad 
    <Foo/>
    ```
    * Do **not** use spaces for JSX curly braces
    ```js
    //good
    <Foo bar={baz} />

    //bad
    <Foo bar={ baz } />
    ```

## **Props:**

* Use camelCase for prop names, or PascalCase if the prop value is a React component.
* Use new lines when props do not fit on the same line.
    ```js
    //good
    <Foo 
        prop1={value1}
        prop2={value2}
        prop3={value3}
    />

    //bad
    <Foo prop1={value1} prop2={value2} prop3={value3} />
    ```

## **Best practices:**

* **Always** add semicolons after a line.
* Use ES6 arrow functions.
* Keep the indentation in your code correct.
* Use 4 spaces for tabs.
* Don't Repeat Yourself. If you think you're repeating too much code, make a smaller component, or a function.
* **Always** add alt prop to `img` tags.
* Add `rel="noopener"` for `a` tags which has `target="_blank"`.
* Don't do `outline: none` on user input elements. If you do not want outline, give them faint, visible background on focus. This is for accessibility.

### Other things to note

* We are using [octicons](https://primer.style/octicons/) for icons. Use this if you need to add icons. Do **not** add a new library for icons.
* Try to not commit changes in `package.json`, `package-lock.json`. 
* Disscuss with contributors on discord if you're planning to add/remove a package.

## Further reading:

This guide is based on [airbnb's react guide](https://github.com/airbnb/javascript/tree/master/react). You can read all the best practices there.