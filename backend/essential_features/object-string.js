export default function objectToString(resumeObject)
{
    const resume_generation_requiremenst = "
        please create a resume based on the below:

        - Each  Experience should only have a Maximum of 4 Bulletines.
        - Please select Experience and bulletine based on the below:
            - Most relevent to the Job discription
            - Order the bulletines based on the end date relevenacy to the job discription.
            - Transform the bulletine to most fit the job discription:
                - Retain as many numers as possible.
                -Include as many key words from the just description as possible.
            - Each bulletines of a job should only consume one line in a word document. Assumming left indent and right indent is 0. Font: Times New Roamn. Font Size: 10
    
        - Once all the jobs are selected. Please sort expereinces from the latest end date first.
            "
}