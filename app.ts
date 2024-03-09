// // Task # 37 : Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeshirt(siza: string = 'large', text: string = ' I Love typescript'): void {
    console.log(`you have order a ${siza}, shirt that says ${text}`)
}

// makeshirt();
// makeshirt('medium')

//different message
makeshirt('small', 'I need a big shirt to wear')