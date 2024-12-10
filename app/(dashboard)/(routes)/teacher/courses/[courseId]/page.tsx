const CourseIdPage = ({
    params
}: {
    params : {courseId: string}
}) => {
    return ( 
        <div>
            courseId is : {params.courseId}
        </div>
     );
}
 
export default CourseIdPage;