// NAVIGATION

// STUDENT
export function studentNavigationConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/students/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Upload",
            link: "/students/upload-doc",
            icon: "Upload",
        },
        {
            id: 3,
            name: "Revision",
            link: "/students/revision",
            icon: "Revision",
        },
        {
            id: 4,
            name: "Seminar",
            link: "/students/seminar",
            icon: "Seminar",
        },
    ];

    return data;
}

// HEAD STUDY PROGRAM
export function headStudyProgramNavigationConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/head-study-programs/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/head-study-programs/proposal",
            icon: "Proposal",
        }
    ];

    return data;
}



// ACADEMIC ADMINISTRATION

export function academicAdministrationNavigationConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/academic-administrations/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/academic-administrations/proposal",
            icon: "Proposal",
        },
        {
            id: 3,
            name: "Invite",
            link: "/academic-administrations/invite",
            icon: "Invite",
        },
        {
            id: 4,
            name: "User",
            link: "/academic-administrations/user-manager",
            icon: "User",
        },
    ];

    return data;
}

// EXAMINER

export function examinerNavigationConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/examiners/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/examiners/proposal",
            icon: "Proposal",
        },

        {
            id: 3,
            name: "Seminar",
            link: "/examiners/seminar",
            icon: "Seminar",
        },
    ];

    return data;
}

// COORDINATOR
export function coordinatorNavigationConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/coordinators/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/coordinators/proposal",
            icon: "Proposal",
        },

        {
            id: 3,
            name: "Seminar",
            link: "/coordinators/seminar",
            icon: "Seminar",
        },
    ];

    return data;
}
// SUPERVISOR

export function supervisorNavigationConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/supervisors/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/supervisors/proposal",
            icon: "Proposal",
        }
    ];

    return data;
}




// SIDEBAR
// STUDENT

export function studentSidebarConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/students/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Upload",
            link: "/students/upload-doc",
            icon: "Upload",
        },
        {
            id: 3,
            name: "Revision",
            link: "/students/revision",
            icon: "Revision",
        },
        {
            id: 4,
            name: "Seminar",
            link: "/students/seminar",
            icon: "Seminar",
        },
    ];

    return data;
}

// HEAD STUDY PROGRAM
export function headStudyProgramSidebarConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/head-study-programs/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/head-study-programs/proposal",
            icon: "Proposal",
        }
    ];

    return data;
}

// ACADEMIC ADMINISTRATION

export function academicAdministrationSidebarConstant() {

    const data = [
        {
            id: 1,
            name: "Main",
            link: "/academic-administrations/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/academic-administrations/proposal",
            icon: "Proposal",
        },
        {
            id: 3,
            name: "Invite",
            link: "/academic-administrations/invite",
            icon: "Invite",
        },
        {
            id: 4,
            name: "User",
            link: "/academic-administrations/user-manager",
            icon: "User",
        },
    ];

    return data;
}

// EXAMINER

export function examinerSidebarConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/examiners/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/examiners/proposal",
            icon: "Proposal",
        },

        {
            id: 3,
            name: "Seminar",
            link: "/examiners/seminar",
            icon: "Seminar",
        },
    ];
    return data;
}

// COORDINATOR

export function coordinatorSidebarConstant() {
    const data = [
        {
            id: 1,
            name: "Main",
            link: "/coordinators/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/coordinators/proposal",
            icon: "Proposal",
        },

        {
            id: 3,
            name: "Seminar",
            link: "/coordinators/seminar",
            icon: "Seminar",
        },
    ];

    return data;
}

// SUPERVISOR

export function supervisorSidebarConstant() {

    const data = [
        {
            id: 1,
            name: "Main",
            link: "/supervisors/main",
            icon: "Main",
        },
        {
            id: 2,
            name: "Proposal",
            link: "/supervisors/proposal",
            icon: "Proposal",
        }
    ];

    return data;
}

// LIST PATH ROUTE 

export function selfPath() {
    return [
        "/academic-administrations/utama/tampilan",
        "/academic-administrations/main",
        "/academic-administrations/proposal",
        "/academic-administrations/user-manager",
        "/academic-administrations/user-manager-setting",
        "/academic-administrations/invite",
        "/students/main",
        "/students/upload-doc",
        "/students/revision",
        "/students/seminar",
        "/head-study-programs/main",
        "/head-study-programs/proposal",
        "/head-study-programs/proposal/detail",
        "/examiners/main",
        "/examiners/proposal",
        "/examiners/proposal/detail",
        "/examiners/seminar",
        "/coordinators/main",
        "/coordinators/proposal",
        "/coordinators/proposal/detail",
        "/coordinators/seminar",
        "/supervisors/main",
        "/supervisors/proposal",
        "/supervisors/proposal/detail",
    ];
}
