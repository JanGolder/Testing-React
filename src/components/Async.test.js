import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', ()=>{
    // findAllByRole requires async function
    test('renders posts if request succeeds', async ()=>{
        // to prevent from unnecessary traffic we can use mocks / fake fetch implemented in jest
        window.fetch = jest.fn();
        // as an argument we put the result of real fetch - json and an array with object(s)
        window.fetch.mockResolvedValueOnce({
            json: async ()=> [{id: 'p1', title: 'First post'}],
        });


        render(<Async/>);
        // default time to get the element by findAllByRole is one second, it can be changed by third argument. Time to get the element is necessary to prepare the dom to be ready for testing (the data comes from async fetch by useEffect so in first render the content is empty)
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});