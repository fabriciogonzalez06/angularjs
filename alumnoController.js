function AlumnoController($scope) {
    $scope.alumnos = [
        { nombre: "Angel", edad: 40 },
        { nombre: "Mario", edad: 50 },
        { nombre: "Diana", edad: 20 },
        { nombre: "Jose", edad: 20 },
        { nombre: "Ernesto", edad: 15 }
    ];

    $scope.visibilidad = false;
    $scope.nuevoAlumno = {};

    $scope.agregar = function() {

        if (Object.keys($scope.nuevoAlumno).length === 0 || Object.keys($scope.nuevoAlumno).length < 2) {
            alert('Ingrese los datos');
            return;
        }

        $scope.alumnos.push($scope.nuevoAlumno);
        console.log($scope.nuevoAlumno);
        $scope.nuevoAlumno = {};
        $scope.visibilidad = false;

    }

    $scope.nuevaPersona = function() {
        $scope.visibilidad = true;
    }
}