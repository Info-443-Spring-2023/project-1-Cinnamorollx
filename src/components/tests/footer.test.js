import '@testing-library/jest-dom'
import { render, screen,  } from '@testing-library/react';
import Footer from '../Footer'

describe("Footer rendering test", () => {
    test("render footer text correctly", () => {
        render(<Footer/>);
        expect(screen.getByText("OurFamily is a University of Washington course project.")).toBeInTheDocument();
    })
})