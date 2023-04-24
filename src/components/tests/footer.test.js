import { toHaveStyle } from '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../Footer'

describe("Testing footer rendering", () => {
    test("render footer text correctly", () => {
        render(<Footer/>);
        expect(screen.getByText("OurFamily is a University of Washington course project.")).toBeInTheDocument();
    })

    describe("Testing footer styling", () => {
        test("correct background color", () => {
            render(<Footer/>);
            const footer = screen.getByTestId("container-footer");
            expect(footer).toHaveStyle(`background-color: "#ece4da"`);
        })
        test('text changes style upon hover', () => {
            render(<Footer/>);
            const footer = screen.getByTestId("container-footer");
            userEvent.hover(footer);
            expect(footer).not.toHaveStyle({height: "7vh"});
        });
    })
})
