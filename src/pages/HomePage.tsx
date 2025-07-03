import AutoCompleteInput, { type AutocompleteSuggestion } from "@/components/ui/inputs/AutoCompleteInput";
import BasicInput from "@/components/ui/inputs/BasicInput";
import BasicLoader from "@/components/ui/loaders/BasicLoader";
import ThemeExampleComponent from "@/components/ui/ThemeExampleComponent";

export default function HomePage() {
    return(
        <>
            <BasicLoader></BasicLoader>
            <ThemeExampleComponent></ThemeExampleComponent>
            <BasicInput></BasicInput>
            <AutoCompleteInput label={""} suggestions={[]} value={null} onSelect={function (item: AutocompleteSuggestion): void {
                throw new Error("Function not implemented.");
            } }></AutoCompleteInput>
        </>
    );
}