import '@testing-library/jest-dom'
import { render, screen,  } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HomePage from '../HomePage';
import Header from '../Header';
import ProfileSelect from '../ProfileSelect';
import Home from '../Home';
import App from '../../App'

describe("try test hompeage", () => {
    test("the page shows correctly", () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        );
        expect(screen.getByTestId("well-technically")).toBeInTheDocument();
    })
    
    describe("test 4 profiles can be clicked", () =>  {
        test("correctly set Linda profile", () => {
            const callback = jest.fn();
           
            render(
                <MemoryRouter>
                <ProfileSelect setCurrentProfile={callback} />
                </MemoryRouter>
            );
            expect(screen.getByText("Who's Here?")).toBeInTheDocument();
           
            userEvent.click(screen.getByTestId("linda-profile"));
            
            expect(callback).toBeCalled();
    
        })
        test("correctly set Timothy profile", () => {
            const callback = jest.fn();
           
            render(
                <MemoryRouter>
                <ProfileSelect setCurrentProfile={callback} />
                </MemoryRouter>
            );
            expect(screen.getByText("Who's Here?")).toBeInTheDocument();
           
            userEvent.click(screen.getByTestId("timothy-profile"));
            
            expect(callback).toBeCalled();

        })
        test("correctly set Bernard profile", () => {
            const callback = jest.fn();
           
            render(
                <MemoryRouter>
                <ProfileSelect setCurrentProfile={callback} />
                </MemoryRouter>
            );
            expect(screen.getByText("Who's Here?")).toBeInTheDocument();
           
            userEvent.click(screen.getByTestId("bernard-profile"));
            
            expect(callback).toBeCalled();

        })
        test("correctly set Grace profile", () => {
            const callback = jest.fn();
           
            render(
                <MemoryRouter>
                <ProfileSelect setCurrentProfile={callback} />
                </MemoryRouter>
            );
            expect(screen.getByText("Who's Here?")).toBeInTheDocument();
           
            userEvent.click(screen.getByTestId("grace-profile"));
            
            expect(callback).toBeCalled();

        })
    })
    
})
