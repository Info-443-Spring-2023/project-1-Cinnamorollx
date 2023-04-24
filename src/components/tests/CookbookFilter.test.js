import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import FilterBar from '../CookbookFilter';

describe("test cookbook filter's content and click functionality", () => {
    test("the number of checkboxes is correct", () => {

        render(<FilterBar/>);
        const checkboxs = screen.getAllByRole('checkbox');
        expect(checkboxs).toHaveLength(10);
        
    });
    test("check if each checkbox can be clicked by a iteration", () => {
        render(<FilterBar/>);
        const checkboxs = screen.getAllByRole('checkbox');

        checkboxs.forEach((item) => {
            userEvent.click(item);
            expect(item.checked).toBe(true);
        })
    })
})