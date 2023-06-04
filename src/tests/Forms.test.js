import { fireEvent, render, screen } from "@testing-library/react"
import { Form } from "../Components/Form/Form"
import { CardSection } from "../Components/Sections/CardSection"
import userEvent from "@testing-library/user-event"




describe("Form", () => {

    const mockFile = {
        fieldname: 'csvFile',
        originalname: 'csvMock.csv',
        encoding: '7bit',
        mimetype: 'application/vnd.ms-excel',
        destination: 'mocks/',
        filename: 'd034d1b96501403785ba4b8e7f4da7bf',
        path: './tests/mocks/csvMock.csv',
    }
    
    let error = ""
    const handleSubmitMock = jest.fn(e => e.preventDefault());
    const handleFileChangeMock = jest.fn()
    const file = null
    const setFileMock = jest.fn()



    test("Should render with this text", () => {

        render(<Form />)

        const title = screen.getByText(/Upload here your .CSV file/i)
        expect(title).toBeInTheDocument()
    }) 


      test("Should upload a CSV file in the input", async ()=>{

        render(<Form handleSubmit={handleSubmitMock} handleFileChange={handleFileChangeMock} setFile={setFileMock} error={error} file={file}/>)


        const inputElement = screen.getByLabelText(/Upload here your .CSV file/i)

        fireEvent.change(inputElement, {target: {files: mockFile}}) 

        const formElement = screen.getByTestId("form-component");

        fireEvent.submit(formElement);



        expect(inputElement.files).toBe(mockFile)
      })

    
})  