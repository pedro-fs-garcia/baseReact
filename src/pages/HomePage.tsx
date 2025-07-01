import CodingPanel from "@/components/ui/codeEditor";
import AutoCompleteInput, { type AutocompleteSuggestion } from "@/components/ui/inputs/AutoCompleteInput";
import BasicInput from "@/components/ui/inputs/BasicInput";
import BasicLoader from "@/components/ui/loaders/BasicLoader";

export default function HomePage() {
    return(
        <>
            <BasicLoader></BasicLoader>
            <CodingPanel></CodingPanel>
            <BasicInput></BasicInput>
            <AutoCompleteInput label={""} suggestions={[]} value={null} onSelect={function (item: AutocompleteSuggestion): void {
                throw new Error("Function not implemented.");
            } }></AutoCompleteInput>
        </>
    );
}