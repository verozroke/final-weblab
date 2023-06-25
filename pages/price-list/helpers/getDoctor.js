import doctors from './json/doctors.json' assert { type: 'json' };


export default function getDoctor(doctorIdx) {
    return doctors[doctorIdx]
}