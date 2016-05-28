// Export classes
module.exports = {
    version :                       require('../package.json').version,

    AABB :                          require('./collision/AABB'),
    ArrayCollisionMatrix :          require('./collision/ArrayCollisionMatrix'),
    Body :                          require('./objects/Body'),
    Box :                           require('./shapes/Box'),
    Broadphase :                    require('./collision/Broadphase'),
    Constraint :                    require('./constraints/Constraint'),
    ContactEquation :               require('./equations/ContactEquation'),
    Narrowphase :                   require('./world/Narrowphase'),
    ConeTwistConstraint :           require('./constraints/ConeTwistConstraint'),
    ContactMaterial :               require('./material/ContactMaterial'),
    ConvexPolyhedron :              require('./shapes/ConvexPolyhedron'),
    Cylinder :                      require('./shapes/Cylinder'),
    DistanceConstraint :            require('./constraints/DistanceConstraint'),
    Equation :                      require('./equations/Equation'),
    EventTarget :                   require('./utils/EventTarget'),
    FrictionEquation :              require('./equations/FrictionEquation'),
    GSSolver :                      require('./solver/GSSolver'),
    GridBroadphase :                require('./collision/GridBroadphase'),
    Heightfield :                   require('./shapes/Heightfield'),
    HingeConstraint :               require('./constraints/HingeConstraint'),
    LockConstraint :                require('./constraints/LockConstraint'),
    Mat3 :                          require('./math/Mat3'),
    Material :                      require('./material/Material'),
    NaiveBroadphase :               require('./collision/NaiveBroadphase'),
    ObjectCollisionMatrix :         require('./collision/ObjectCollisionMatrix'),
    Pool :                          require('./utils/Pool'),
    Particle :                      require('./shapes/Particle'),
    Plane :                         require('./shapes/Plane'),
    PointToPointConstraint :        require('./constraints/PointToPointConstraint'),
    Quaternion :                    require('./math/Quaternion'),
    Ray :                           require('./collision/Ray'),
    RaycastVehicle :                require('./objects/RaycastVehicle'),
    RaycastResult :                 require('./collision/RaycastResult'),
    RigidVehicle :                  require('./objects/RigidVehicle'),
    RotationalEquation :            require('./equations/RotationalEquation'),
    RotationalMotorEquation :       require('./equations/RotationalMotorEquation'),
    SAPBroadphase :                 require('./collision/SAPBroadphase'),
    SPHSystem :                     require('./objects/SPHSystem'),
    Shape :                         require('./shapes/Shape'),
    Solver :                        require('./solver/Solver'),
    Sphere :                        require('./shapes/Sphere'),
    SplitSolver :                   require('./solver/SplitSolver'),
    Spring :                        require('./objects/Spring'),
    Transform :                     require('./math/Transform'),
    Trimesh :                       require('./shapes/Trimesh'),
    Vec3 :                          require('./math/Vec3'),
    Vec3Pool :                      require('./utils/Vec3Pool'),
    World :                         require('./world/World'),
};
