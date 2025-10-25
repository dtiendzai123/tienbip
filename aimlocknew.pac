function FindProxyForURL(url, host) {
    // Proxy giảm lag bạn đã chọn
    var proxy = "PROXY 82.26.74.193:9002";

    // Nhóm domain Free Fire & Garena
    var freefire_domains = [
        "freefiremobile.com",
        "ff.garena.com",
        "garena.com",
        "account.garena.com",
        "shop.garena.com",
        "content.garena.com",
        "ffodownload.freefiremobile.com",
        "network.freefiremobile.com",
        "update.freefiremobile.com",
        "patch.freefiremobile.com"
    ];

    // Cho các domain trong danh sách đi qua proxy
    for (var i = 0; i < freefire_domains.length; i++) {
        if (dnsDomainIs(host, freefire_domains[i]) ||
            shExpMatch(host, "*." + freefire_domains[i])) {
            return proxy;
        }
    }

    // Cho các dịch vụ Google/Firebase (telemetry, cloud)
    if (shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.firebaseio.com") ||
        shExpMatch(host, "*.gvt2.com") ||
        shExpMatch(host, "*.googleusercontent.com")) {
        return proxy;
    }
const FreeFireSystemInjection = {
HyperHeadLockSystem: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "hyper",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 10.0,
        smoothing: 0.0,
        maxDragDistance: 0.0,
        snapBackToHead: true,
        predictionFactor: 1.5,
        autoFireOnLock: true,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    StableHeadLockSystem: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "extreme",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 5.0,
        smoothing: 0.0,
        maxDragDistance: 0.0,
        snapBackToHead: true,
        predictionFactor: 1.2,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    TouchBoostPrecisionSystem: {
        enabled: true,
        precisionMode: true,
        boostOnTouch: true,
        boostOnDrag: true,
        boostOnFire: true,
        baseSensitivity: 10.0,
        boostMultiplier: 20.0,
        precisionDragMultiplier: 0.0,
        boostRampUpTime: 0.0,
        boostDecayTime: 0.0,
        microDragPrecision: 0.0,
        microDragMultiplier: 1.0,
        tapDistanceThreshold: 0.0,
        microAdjustThreshold: 0.0,
        microAdjustSmoothing: 1.0,
        latencyCompensation: true,
        latencyMs: -30,
        overshootProtection: true,
        overshootLimit: 0.0,
        debugLog: false,

    },

   // instantdragtobonehead.js
// File cấu hình InstantDragToBoneHead + toàn bộ thông số chống rung & giảm giật

const InstantDragToBoneHead = {
  enabled: true,
  targetBone: "bone_Head",
  snapOnDragStart: true,
  holdLockWhileDragging: true,
  maxSnapDistance: 0.01,
  trackingSpeed: 2.0,
  smoothing: 0.0,
  snapToleranceAngle: 0.0,
  disableBodyRecenter: true,
  predictionFactor: 1,

  // --- Toàn bộ cấu hình giảm giật, rung và ghim tâm được nhúng ở đây ---
  config: `# --- Fix Rung Mạnh Config - Tối Ưu Giảm Giật & Rung ---

# --- Giảm Giật Và Rung Tối Đa ---
RecoilSuppressionMaster=2
AntiShake Stablizer=2
ZeroRecoilDrag=2
SmoothRecoilControl=2
StabilizedDragForce=2
DragRecoilFixer=2
GripForceStabilizer=2
RecoilLockdown=2
ZeroDriftFix=2
GripMomentumControl=2
DragResistanceEnhancer=2
UltraStabilizedDrag=2
RecoilSmoothing=2
PrecisionGripFix=2
LowFrictionGrip=2

VerticalRecoil Suppression=1
HorizontalShake Reduction=1
RealTimeGun Stability Control=1
DynamicRecoil Feedback Modulation=1
AdvancedShooting Balance=1
InteractiveWeapon Response=1
RealTimeCrosshair Anchor=1
AutoRecoil Adjust System=1
StabilizedFiring Rate Control=1
QuickRecoil Reset Options=1

# --- Cải Tiến Cho Độ Chính Xác và Giảm Giật ---
RecoilAutoBalance=2
TouchDriftFix=2
RecoilPressureCompensator=2
GripCalibrationTuning=2
GripForceControl=2
DragFlowStabilizer=2
PressureGripFix=2
VerticalDragCorrection=2
HorizontalDragFixer=2
AntiShakeEnhancer=2
QuickGripCorrection=2
SuperStableDrag=2
StableSwipeCalibration=2

# --- Tăng Tốc Độ Độ Chính Xác, Giảm Trễ ---
ZeroLatencyTouchControl=2
RealTimeRecoilFixer=2
QuickDragRestraint=2
DragStabilityEnhancer=2
TouchPressureBalancer=2
TouchInputFixer=2
SwipeStabilizer=2
RapidGripAdjustment=2
FineGripOptimizer=2

# --- Ghim Tâm Giảm Lố - Cấu Hình Kéo Tâm Chính Xác ---
# --- Tạo Mặt Nạ Ghim Tâm, Giảm Quá Dính, Tăng Chính Xác ---

# --- Kéo Tâm Chính Xác & Ghim Tâm ---
PrecisionAimLock=2
VerticalAimFix=1
HorizontalAimFix=1
SmoothGripControl=2
DragStabilityBalancer=2
GripSensitivityTuning=2
AutoAimFix=1
DragSpeedAdjuster=2
DragControlLimiter=1
TouchGripResponse=2
DynamicGripReset=2

# --- Ghim Tâm, Giảm Lệch, Giảm Quá Dính ---
AutoCenteringFix=2
RealTimeAimLock=2
VerticalDragLimiter=2
HorizontalDragLimiter=2
HeadSnapLimiter=1
DragPrecisionTuner=2
GripCorrectionEnhancer=2
NoExcessiveGrip=2
BalancedDragControl=2
RealTimePrecisionSync=2

# --- Giảm Quá Dính, Cải Tiến Độ Chính Xác ---
ZeroLateralMovement=1
ZeroVerticalDrift=1
NoAimSnapFixer=2
TouchSensitivityLock=2
DragReductionOptimizer=2
RecoilCorrectionSystem=1
DragAndDropSync=1
GripForceLimiter=1
ZeroFluctuationDrag=2

# --- Ghim Tâm Mượt Mà, Chính Xác, Không Lệch ---
GripStabilizer=2
FastDragControl=2
TouchInputCorrection=1
DragSpeedLimiter=2`
};

// Xuất module
export default InstantDragToBoneHead;


    PointerSpeedBoost: { pointerSpeedBoost: 9, confPointerTiming: 1, selectPointerSpeedRoot9: 1 },
    PPIInjection: { ppiOverride: 550, selectPPIInfo: 1 },
    DPIInjection: { dpiPointer: 10000 },
const dotNotationConfig = {
  "input_lock_on_precision_mode": "head_3d_tracking",
  "input_lock_on_track_velocity": true,
  "input_lock_on_rotation_tracking": true,
  "input_lock_on_predict_movement": true,
  "input_lock_on_keep_xy": true,
  "input_lock_on_offset_x": BONE_HEAD_CONFIG.offset.x,
  "input_lock_on_offset_y": BONE_HEAD_CONFIG.offset.y,
  "input_lock_on_offset_z": BONE_HEAD_CONFIG.offset.z,

  // 🎯 Vuốt chính xác & phản hồi nhanh
  "fire.gesture.drag_assist": true,
  "fire.gesture.drag_force_multiplier": 40.0,
  "fire.gesture.input_response_speed": 999.0,
  "fire.gesture.velocity_amplifier": 10.75,
  "fire.gesture.drag_consistency": 10.0,
  "fire.gesture.drag_response_speed": 999.0,
  "fire.gesture.input_delay": 0,
  "fire.gesture.touch_latency": 0,
  "fire.gesture.drag_input_buffer": 0,
  "fire.gesture.touch_response_override": true,
  // 🔥 Tăng lực drag nút bắn
  "fire.button.drag_boost": true,
  "fire.button.drag_multiplier": 10.5,
  "fire.button.drag_response_speed": 9999.0,
  "fire.button.lock_on_strength": 10.0,
  "fire.button.drag_assist_zone": "full",  // toàn vùng nút bắn có hiệu lực kéo
  "fire.button.drag_sensitivity_boost": 10.0,
  "fire.button.aim_response_acceleration": 10.0,
  // 📱 Nhạy tâm ngắm & vuốt màn hình
  "screen.touch.drag_sensitivity": 8.0,
  "screen.touch.smoothing": 1.0,
  "screen.touch.precision_lock_threshold": 0.0001,
  "screen.touch.adaptive_speed": true,
  "screen.touch.speed_min": 0.0001,
  "screen.touch.speed_max": 0.0035,
  "aimHeadLock.aimBone": "bone_Head",
  "aimHeadLock.autoLock": true,
  "aimHeadLock.lockInjection": true,
  "aimHeadLock.lockStrength": "maximum",
  "aimHeadLock.snapBias": 5.0,
  "aimHeadLock.trackingSpeed": 7.0,
  "aimHeadLock.dragCorrectionSpeed": 7.0,
  "aimHeadLock.snapToleranceAngle": 7.5,
  "aimHeadLock.maxLockAngle": 360,
  "aimHeadLock.stickiness": "high",
  "aimHeadLock.headStickPriority": true,

  // 🧠 Dữ liệu xương Head
  "aimHeadLock.boneHead_position_x": -0.0456970781,
  "aimHeadLock.boneHead_position_y": -0.004478302,
  "aimHeadLock.boneHead_position_z": -0.0200432576,

  "aimHeadLock.boneHead_rotation_x": 0.0258174837,
  "aimHeadLock.boneHead_rotation_y": -0.08611039,
  "aimHeadLock.boneHead_rotation_z": -0.1402113,
  "aimHeadLock.boneHead_rotation_w": 0.9860321,

  "aimHeadLock.boneHead_scale_x": 0.99999994,
  "aimHeadLock.boneHead_scale_y": 1.00000012,
  "aimHeadLock.boneHead_scale_z": 1.0,
  // 🧠 Nhạy mục tiêu headlock
  "aim.headlock.lock_radius_limit": true,
  "aim.headlock.lock_radius_max": 360.0,
  "aim.headlock.snap_strength": 10.0,
  "aim.headlock.smooth_factor": 0.7,
  "aim.headlock.auto_adjust": true,
  "aim.headlock.offset_neck_bias": 0.015
};
const BoneAimSwitch = {
  spineBindPoseMatrix: [
    [-0.5548112, -0.0359000079, 0.831201553, -0.260563046],
    [-0.831358,   0.0624267831, -0.5522192,   0.53829],
    [-0.03206457, -0.997403443, -0.06448084,  0.0559907332],
    [0.0, 0.0, 0.0, 1.0]
  ],

  spineTransformPosition: {
    x: -0.0214483067, y: 0.0, z: 4.768e-09
  },

  headBindPoseMatrix: [
    [-1.34559613E-13, 8.881784E-14, -1.0, 0.487912],
    [-2.84512817E-06, -1.0, 8.881784E-14, -2.842171E-14],
    [-1.0, 2.84512817E-06, -1.72951931E-13, 0.0],
    [0.0, 0.0, 0.0, 1.0]
  ],

  headTransformPosition: {
    x: -0.0456970781, y: -0.004478302, z: -0.0200432576
  },

  getCameraPosition() {
    return { x: 0, y: 1.5, z: -3 }; // ví dụ camera
  },

  getViewDirection() {
    return this.normalize({ x: 0.5, y: -0.5, z: 1 });
  },

  normalize(v) {
    const mag = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) || 1e-6;
    return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
  },

  dotProduct(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  },

  vectorTo(from, to) {
    return { x: to.x - from.x, y: to.y - from.y, z: to.z - from.z };
  },

  multiplyMatrixPosition(matrix, pos) {
    return {
      x: matrix[0][0] * pos.x + matrix[0][1] * pos.y + matrix[0][2] * pos.z + matrix[0][3],
      y: matrix[1][0] * pos.x + matrix[1][1] * pos.y + matrix[1][2] * pos.z + matrix[1][3],
      z: matrix[2][0] * pos.x + matrix[2][1] * pos.y + matrix[2][2] * pos.z + matrix[2][3]
    };
  },

  aimAt(pos, label) {
    console.log(`🎯 AIM AT [${label}]`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAndAim: function () {
    const cam = this.getCameraPosition();
    const viewDir = this.getViewDirection();

    const spineWorld = this.multiplyMatrixPosition(this.spineBindPoseMatrix, this.spineTransformPosition);
    const dirToSpine = this.normalize(this.vectorTo(cam, spineWorld));
    const dot = this.dotProduct(viewDir, dirToSpine);

    if (dot >= 0.98) {
      // camera nhìn vào vùng Spine → chuyển sang HEAD
      const headWorld = this.multiplyMatrixPosition(this.headBindPoseMatrix, this.headTransformPosition);
      this.aimAt(headWorld, "HEAD 🔒");
    } else {
      console.log("🚫 Not aiming spine, target not in view.");
    }
  },

  runLoop: function () {
    setInterval(() => {
      this.checkAndAim();
    }, 16); // 60 FPS
  }
};
// BoneAimSwitch.runLoop(); // gộp vào AutoAimMasterLoop

const SmartSpine1AimSwitch = {
  spine1BindPose: [
    [0.113457531,  -0.08243211,   0.990117252,  -0.266050339],
    [-0.0724989,   -0.994582355, -0.0744961947, 0.0256437212],
    [0.990894139,  -0.06333027,  -0.1188191,    0.107845038],
    [0, 0, 0, 1]
  ],

  spine1Transform: {
    position: { x: -0.07381998, y: 0.0, z: 0.0 },
    rotation: { x: -0.014863, y: 0.221670672, z: -0.00825078, w: 0.97497344 },
    scale:    { x: 1.0, y: 0.99999994, z: 1.0 }
  },

  headBindPose: [
    [-1.34559613E-13, 8.881784E-14, -1.0, 0.487912],
    [-2.84512817E-06, -1.0, 8.881784E-14, -2.842171E-14],
    [-1.0, 2.84512817E-06, -1.72951931E-13, 0.0],
    [0.0, 0.0, 0.0, 1.0]
  ],

  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }
  },

  getCameraPosition() {
    return { x: 0, y: 1.5, z: -3 };
  },

  getViewDirection() {
    return this.normalize({ x: 0.5, y: -0.4, z: 1.0 }); // giả định hướng camera
  },

  normalize(v) {
    const mag = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) || 1e-6;
    return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
  },

  dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  },

  sub(a, b) {
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
  },

  multiplyMatrixAndPosition(mat, pos) {
    return {
      x: mat[0][0] * pos.x + mat[0][1] * pos.y + mat[0][2] * pos.z + mat[0][3],
      y: mat[1][0] * pos.x + mat[1][1] * pos.y + mat[1][2] * pos.z + mat[1][3],
      z: mat[2][0] * pos.x + mat[2][1] * pos.y + mat[2][2] * pos.z + mat[2][3]
    };
  },

  aimAt(pos, label) {
    console.log(`🎯 AIM TO [${label}]`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAimSwitch() {
    const camPos = this.getCameraPosition();
    const viewDir = this.getViewDirection();

    const spine1World = this.multiplyMatrixAndPosition(this.spine1BindPose, this.spine1Transform.position);
    const dirToSpine1 = this.normalize(this.sub(spine1World, camPos));
    const dot = this.dot(viewDir, dirToSpine1);

    if (dot > 0.98) {
      const headWorld = this.multiplyMatrixAndPosition(this.headBindPose, this.headTransform.position);
      this.aimAt(headWorld, "bone_Head 🔒");
    } else {
      console.log("🚫 Ignoring bone_Spine1, not in aim direction");
    }
  },

  runLoop() {
    setInterval(() => {
      this.checkAimSwitch();
    }, 16); // 60 FPS
  }
};
// SmartSpine1AimSwitch.runLoop(); // gộp vào AutoAimMasterLoop

const SmartClavicleSwitch = {
  // ========== Bindpose bone_LeftClav ==========
  clavBindPose: [
    [-4.91947334e-15, -2.220446e-14, 1.00000012, -0.06050579],
    [0.115966067, -0.9932532, 2.220446e-14, 0.016761886],
    [0.9932531, 0.115966052, 7.771561e-14, -0.102392569],
    [0, 0, 0, 1]
  ],

  clavTransform: {
    position: { x: -0.01913227, y: 3.8147e-08, z: 0.0 },
    rotation: { x: -2.14e-09, y: -3.57e-09, z: -0.07654541, w: 0.99706614 },
    scale:    { x: 0.99999994, y: 1.00000012, z: 1.0 }
  },

  // ========== Bindpose bone_Head ==========
  headBindPose: [
    [-1.34559613E-13, 8.881784E-14, -1.0, 0.487912],
    [-2.84512817E-06, -1.0, 8.881784E-14, -2.842171E-14],
    [-1.0, 2.84512817E-06, -1.72951931E-13, 0.0],
    [0, 0, 0, 1]
  ],

  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }
  },

  // ========== Math & Camera ==========
  getCameraPosition() {
    return { x: 0, y: 1.5, z: -3 };
  },

  getViewDirection() {
    return this.normalize({ x: 0.5, y: -0.4, z: 1 });
  },

  normalize(v) {
    const mag = Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2) || 1e-6;
    return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
  },

  subtract(a, b) {
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
  },

  dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  },

  multiplyMatrixAndPosition(matrix, pos) {
    return {
      x: matrix[0][0] * pos.x + matrix[0][1] * pos.y + matrix[0][2] * pos.z + matrix[0][3],
      y: matrix[1][0] * pos.x + matrix[1][1] * pos.y + matrix[1][2] * pos.z + matrix[1][3],
      z: matrix[2][0] * pos.x + matrix[2][1] * pos.y + matrix[2][2] * pos.z + matrix[2][3]
    };
  },

  aimAt(pos, label) {
    console.log(`🎯 AIM TO [${label}]`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAim() {
    const camPos = this.getCameraPosition();
    const viewDir = this.getViewDirection();

    const clavWorld = this.multiplyMatrixAndPosition(this.clavBindPose, this.clavTransform.position);
    const dirToClav = this.normalize(this.subtract(clavWorld, camPos));
    const dot = this.dot(viewDir, dirToClav);

    if (dot > 0.98) {
      // Tâm đang hướng vào Left Clav → chuyển sang Head
      const headWorld = this.multiplyMatrixAndPosition(this.headBindPose, this.headTransform.position);
      this.aimAt(headWorld, "bone_Head 🔒");
    } else {
      console.log("🚫 Not aiming LeftClav, ignore aim");
    }
  },

  runLoop() {
    setInterval(() => {
      this.checkAim();
    }, 16); // 60 FPS
  }
};
// SmartClavicleSwitch.runLoop(); // gộp vào AutoAimMasterLoop

const SmartRightClavSwitch = {
  // ========== Right Clavicle ==========
  rightClavBindPose: [
    [-2.589753e-06, -0.999969959, -0.00774364034, 0.08466149],
    [-6.48462037e-06, 0.007743638, -0.9999698, 0.7433083],
    [0.9999997, -2.53946064e-06, -6.504481e-06, 4.86830731e-06],
    [0, 0, 0, 1]
  ],

  rightClavTransform: {
    position: { x: -0.143704757, y: -0.0102021145, z: -6.00741643e-08 },
    rotation: { x: 6.180791e-14, y: 3.99176855e-07, z: -0.143920109, w: 0.989589334 },
    scale:    { x: 1.49999118, y: 1.49999118, z: 1.49999118 }
  },

  // ========== Head ==========
  headBindPose: [
    [-1.34559613e-13, 8.881784e-14, -1.0, 0.487912],
    [-2.84512817e-06, -1.0, 8.881784e-14, -2.842171e-14],
    [-1.0, 2.84512817e-06, -1.72951931e-13, 0.0],
    [0, 0, 0, 1]
  ],

  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }
  },

  // ========== Math & Logic ==========
  getCameraPosition() {
    return { x: 0, y: 1.5, z: -3 };
  },

  getViewDirection() {
    return this.normalize({ x: 0.4, y: -0.2, z: 1.0 }); // hướng nhìn giả định
  },

  normalize(v) {
    const mag = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) || 1e-6;
    return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
  },

  subtract(a, b) {
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
  },

  dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  },

  multiplyMatrixAndPosition(matrix, pos) {
    return {
      x: matrix[0][0] * pos.x + matrix[0][1] * pos.y + matrix[0][2] * pos.z + matrix[0][3],
      y: matrix[1][0] * pos.x + matrix[1][1] * pos.y + matrix[1][2] * pos.z + matrix[1][3],
      z: matrix[2][0] * pos.x + matrix[2][1] * pos.y + matrix[2][2] * pos.z + matrix[2][3]
    };
  },

  aimAt(pos, label) {
    console.log(`🎯 AIM TO [${label}]`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAim() {
    const camPos = this.getCameraPosition();
    const viewDir = this.getViewDirection();

    const clavWorld = this.multiplyMatrixAndPosition(this.rightClavBindPose, this.rightClavTransform.position);
    const dirToClav = this.normalize(this.subtract(clavWorld, camPos));
    const dot = this.dot(viewDir, dirToClav);

    if (dot > 0.98) {
      const headWorld = this.multiplyMatrixAndPosition(this.headBindPose, this.headTransform.position);
      this.aimAt(headWorld, "bone_Head 🔒");
    } else {
      console.log("🚫 Ignoring RightClav, not aiming it");
    }
  },

  runLoop() {
    setInterval(() => {
      this.checkAim();
    }, 16); // 60 FPS
  }
};
// SmartRightClavSwitch.runLoop(); // gộp vào AutoAimMasterLoop


const SmartLeftForearmSwitch = {
  // ========== Left ForeArm ==========
  leftForearmBindPose: [
    [-0.636317, 0.000971268862, 0.771427035, -0.527112365],
    [-0.0195463989, 0.9996577, -0.0173816178, -0.0119081419],
    [-0.7711799, -0.0261388365, -0.6360804, 0.562801],
    [0, 0, 0, 1]
  ],

  leftForearmTransform: {
    position: { x: -0.0479800031, y: -0.000254631741, z: 7.923394e-08 },
    rotation: { x: -2.080476e-06, y: 6.93676043e-07, z: -0.000398159027, w: 0.99999994 },
    scale:    { x: 1.0, y: 1.0, z: 1.0 }
  },

  // ========== Head ==========
  headBindPose: [
    [-1.34559613e-13, 8.881784e-14, -1.0, 0.487912],
    [-2.84512817e-06, -1.0, 8.881784e-14, -2.842171e-14],
    [-1.0, 2.84512817e-06, -1.72951931e-13, 0.0],
    [0, 0, 0, 1]
  ],

  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }
  },

  // ========== Math Utilities ==========
  getCameraPosition() {
    return { x: 0, y: 1.5, z: -3 }; // giả lập
  },

  getViewDirection() {
    return this.normalize({ x: 0.3, y: -0.1, z: 1.0 });
  },

  normalize(v) {
    const m = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) || 1e-6;
    return { x: v.x / m, y: v.y / m, z: v.z / m };
  },

  subtract(a, b) {
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
  },

  dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  },

  multiplyMatrixAndPosition(matrix, pos) {
    return {
      x: matrix[0][0] * pos.x + matrix[0][1] * pos.y + matrix[0][2] * pos.z + matrix[0][3],
      y: matrix[1][0] * pos.x + matrix[1][1] * pos.y + matrix[1][2] * pos.z + matrix[1][3],
      z: matrix[2][0] * pos.x + matrix[2][1] * pos.y + matrix[2][2] * pos.z + matrix[2][3]
    };
  },

  aimAt(pos, label) {
    console.log(`🎯 AIM TO [${label}]`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAim() {
    const camPos = this.getCameraPosition();
    const viewDir = this.getViewDirection();

    const armWorld = this.multiplyMatrixAndPosition(this.leftForearmBindPose, this.leftForearmTransform.position);
    const dirToArm = this.normalize(this.subtract(armWorld, camPos));
    const dot = this.dot(viewDir, dirToArm);

    if (dot > 0.98) {
      // Nếu đang nhìn vào tay → chuyển sang đầu
      const headWorld = this.multiplyMatrixAndPosition(this.headBindPose, this.headTransform.position);
      this.aimAt(headWorld, "bone_Head 🔒");
    } else {
      console.log("🛑 Not aiming forearm — ignore aim.");
    }
  },

  runLoop() {
    setInterval(() => {
      this.checkAim();
    }, 16); // 60Hz
  }
};
// SmartLeftForearmSwitch.runLoop(); // gộp vào AutoAimMasterLoop

const RightForeArmAimSwitch = {
  // ========= Right ForeArm =========
  rightForeArmBindPose: [
    [ 0.636316955,  0.0009695268,  0.771427035,  -0.5271124 ],
    [ 0.0195491333, 0.9996575,    -0.0173816122, -0.011908141 ],
    [-0.771179736,  0.0261409469,  0.6360802,    -0.562800944 ],
    [ 0, 0, 0, 1 ]
  ],
  rightForeArmTransform: {
    position: { x: 0.0, y: 0.0, z: 0.0 },
    rotation: { x: -0.499999642, y: 0.500000358, z: 0.499999642, w: 0.500000358 },
    scale:    { x: 1.0, y: 1.0, z: 1.0 }
  },

  // ========= Head =========
  headBindPose: [
    [-1.34559613e-13, 8.881784e-14, -1.0, 0.487912],
    [-2.84512817e-06, -1.0, 8.881784e-14, -2.842171e-14],
    [-1.0, 2.84512817e-06, -1.72951931e-13, 0.0],
    [0, 0, 0, 1]
  ],
  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }
  },

  // ========= Math & Logic =========
  getCameraPosition() {
    return { x: 0, y: 1.6, z: -3 }; // camera giả định
  },
  getViewDirection() {
    return this.normalize({ x: 0.2, y: -0.1, z: 1.0 });
  },
  normalize(v) {
    const mag = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) || 1e-6;
    return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
  },
  subtract(a, b) {
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
  },
  dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  },
  multiplyMatrixAndPosition(m, p) {
    return {
      x: m[0][0]*p.x + m[0][1]*p.y + m[0][2]*p.z + m[0][3],
      y: m[1][0]*p.x + m[1][1]*p.y + m[1][2]*p.z + m[1][3],
      z: m[2][0]*p.x + m[2][1]*p.y + m[2][2]*p.z + m[2][3]
    };
  },
  aimAt(pos, label) {
    console.log(`🎯 AIM TO [${label}]:`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAim() {
    const cam = this.getCameraPosition();
    const dir = this.getViewDirection();

    const armWorld = this.multiplyMatrixAndPosition(
      this.rightForeArmBindPose,
      this.rightForeArmTransform.position
    );
    const aimVec = this.normalize(this.subtract(armWorld, cam));
    const dotProduct = this.dot(dir, aimVec);

    if (dotProduct > 0.985) {
      // Hướng đúng vào RightForeArm → chuyển sang Head
      const headWorld = this.multiplyMatrixAndPosition(
        this.headBindPose,
        this.headTransform.position
      );
      this.aimAt(headWorld, "bone_Head 🔒");
    } else {
      console.log("🛑 Ignored RightForeArm — not aiming.");
    }
  },

  runLoop() {
    setInterval(() => {
      this.checkAim();
    }, 8); // 60Hz
  }
};
// RightForeArmAimSwitch.runLoop(); // gộp vào AutoAimMasterLoop


const LeftLegAimSwitch = {
  // ========== Left Leg ==========
  leftLegBindPose: [
    [-0.2573126, 0.378739476, 0.889014244, -0.4047346],
    [ 0.387405455, 0.88325423, -0.26415652, 0.0330787748],
    [-0.8852722, 0.2764382, -0.373998284, 0.4432086],
    [0, 0, 0, 1]
  ],
  leftLegTransform: {
    position: { x: -0.05506518, y: 0.0648240447, z: -9.536743e-09 },
    rotation: { x: 2.63404742e-09, y: 2.634309e-09, z: -0.7071068, w: 0.7071068 },
    scale: { x: 1.0, y: 1.0, z: 1.0 }
  },

  // ========== Head ==========
  headBindPose: [
    [-1.34559613e-13, 8.881784e-14, -1.0, 0.487912],
    [-2.84512817e-06, -1.0, 8.881784e-14, -2.842171e-14],
    [-1.0, 2.84512817e-06, -1.72951931e-13, 0.0],
    [0, 0, 0, 1]
  ],
  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }
  },

  // ========== Math & Aim Logic ==========
  getCameraPosition() {
    return { x: 0, y: 1.6, z: -3 }; // camera giả lập
  },
  getViewDirection() {
    return this.normalize({ x: 0.1, y: -0.1, z: 1.0 });
  },
  normalize(v) {
    const mag = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) || 1e-6;
    return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
  },
  subtract(a, b) {
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
  },
  dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  },
  multiplyMatrixAndPosition(m, p) {
    return {
      x: m[0][0]*p.x + m[0][1]*p.y + m[0][2]*p.z + m[0][3],
      y: m[1][0]*p.x + m[1][1]*p.y + m[1][2]*p.z + m[1][3],
      z: m[2][0]*p.x + m[2][1]*p.y + m[2][2]*p.z + m[2][3]
    };
  },
  aimAt(pos, label) {
    console.log(`🎯 AIM TO [${label}]:`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAim() {
    const cam = this.getCameraPosition();
    const dir = this.getViewDirection();

    const legWorld = this.multiplyMatrixAndPosition(
      this.leftLegBindPose,
      this.leftLegTransform.position
    );
    const aimVec = this.normalize(this.subtract(legWorld, cam));
    const dotProduct = this.dot(dir, aimVec);

    if (dotProduct > 0.985) {
      // Đang ngắm vào LeftLeg → chuyển sang Head
      const headWorld = this.multiplyMatrixAndPosition(
        this.headBindPose,
        this.headTransform.position
      );
      this.aimAt(headWorld, "bone_Head 🔒");
    } else {
      console.log("🛑 Đang không nhắm vào bone_LeftLeg.");
    }
  },

  runLoop() {
    setInterval(() => {
      this.checkAim();
    }, 16); // khoảng 60 lần/giây
  }
};
// LeftLegAimSwitch.runLoop(); // gộp vào AutoAimMasterLoop

const RightLegAimSwitch = {
  // ========== Right Leg ==========
  rightLegBindPose: [
    [-0.5548109, -0.035899926, 0.8312015, -0.260563076],
    [-0.8313583, 0.062426772, -0.5522193, 0.538290262],
    [-0.0320646, -0.997403741, -0.06448076, 0.0559905954],
    [0, 0, 0, 1]
  ],
  rightLegTransform: {
    position: { x: -0.05104271, y: -0.00664260844, z: 0.0112954779 },
    rotation: { x: 0.005462859, y: 0.04022036, z: -0.128533632, w: 0.9908742 },
    scale:    { x: 0.9999998, y: 1.0, z: 1.00000012 }
  },

  // ========== Head ==========
  headBindPose: [
    [-1.34559613e-13, 8.881784e-14, -1.0, 0.487912],
    [-2.84512817e-06, -1.0, 8.881784e-14, -2.842171e-14],
    [-1.0, 2.84512817e-06, -1.72951931e-13, 0.0],
    [0, 0, 0, 1]
  ],
  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }
  },

  // ========== Math & Aim ==========
  getCameraPosition() {
    return { x: 0, y: 1.6, z: -3 };
  },
  getViewDirection() {
    return this.normalize({ x: 0.1, y: -0.1, z: 1.0 });
  },
  normalize(v) {
    const mag = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) || 1e-6;
    return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
  },
  subtract(a, b) {
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
  },
  dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  },
  multiplyMatrixAndPosition(m, p) {
    return {
      x: m[0][0]*p.x + m[0][1]*p.y + m[0][2]*p.z + m[0][3],
      y: m[1][0]*p.x + m[1][1]*p.y + m[1][2]*p.z + m[1][3],
      z: m[2][0]*p.x + m[2][1]*p.y + m[2][2]*p.z + m[2][3]
    };
  },
  aimAt(pos, label) {
    console.log(`🎯 AIM TO [${label}]:`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAim() {
    const cam = this.getCameraPosition();
    const dir = this.getViewDirection();

    const legWorld = this.multiplyMatrixAndPosition(
      this.rightLegBindPose,
      this.rightLegTransform.position
    );
    const aimVec = this.normalize(this.subtract(legWorld, cam));
    const dotProduct = this.dot(dir, aimVec);

    if (dotProduct > 0.985) {
      // Nếu đang nhắm vào right leg → chuyển sang lock head
      const headWorld = this.multiplyMatrixAndPosition(
        this.headBindPose,
        this.headTransform.position
      );
      this.aimAt(headWorld, "bone_Head 🔒");
    } else {
      console.log("⛔ Không nhắm vào bone_RightLeg");
    }
  },

  runLoop() {
    setInterval(() => {
      this.checkAim();
    }, 16); // ~60 lần/giây
  }
};
// RightLegAimSwitch.runLoop(); // gộp vào AutoAimMasterLoop


const HipsAimSwitch = {
  // Bindpose bone_Hips
  hipsBindPose: [
    [-0.004590507, -0.999851167, 0.0165641839, 0.0533402786],
    [-0.0013007605, -0.0165581275, -0.999861956, 0.00351472667],
    [0.9999896, -0.00461155176, -0.00122370217, 0.0007634153],
    [0, 0, 0, 1]
  ],

  hipsTransform: {
    position: { x: -0.0533402227, y: -0.00351470942, z: -0.000763373333 },
    rotation: { x: 0.00634025969, y: 0.0412556976, z: -0.0370349, w: 0.9984419 },
    scale:    { x: 1.00000012, y: 1.00000012, z: 1.0 }
  },

  // Bindpose bone_Head (ví dụ)
  headBindPose: [
    [-1.34559613e-13, 8.881784e-14, -1.0, 0.487912],
    [-2.84512817e-06, -1.0, 8.881784e-14, -2.842171e-14],
    [-1.0, 2.84512817e-06, -1.72951931e-13, 0.0],
    [0, 0, 0, 1]
  ],
  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 }
  },

  // Vector toán học cơ bản
  normalize(v) {
    const mag = Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z) || 1e-6;
    return { x: v.x/mag, y: v.y/mag, z: v.z/mag };
  },
  subtract(a, b) {
    return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
  },
  dot(a, b) {
    return a.x*b.x + a.y*b.y + a.z*b.z;
  },

  multiplyMatrixAndPosition(m, p) {
    return {
      x: m[0][0]*p.x + m[0][1]*p.y + m[0][2]*p.z + m[0][3],
      y: m[1][0]*p.x + m[1][1]*p.y + m[1][2]*p.z + m[1][3],
      z: m[2][0]*p.x + m[2][1]*p.y + m[2][2]*p.z + m[2][3]
    };
  },

  getCameraPosition() {
    // Ví dụ: vị trí camera người chơi
    return { x: 0, y: 1.6, z: -3 };
  },
  getViewDirection() {
    // Ví dụ: hướng camera, cần normalize
    return this.normalize({ x: 0, y: 0, z: 1 });
  },

  aimAt(pos, label) {
    console.log(`🎯 AIM TO [${label}]:`, pos.x.toFixed(6), pos.y.toFixed(6), pos.z.toFixed(6));
  },

  checkAim() {
    const cam = this.getCameraPosition();
    const dir = this.getViewDirection();

    const hipsWorldPos = this.multiplyMatrixAndPosition(this.hipsBindPose, this.hipsTransform.position);
    const aimVec = this.normalize(this.subtract(hipsWorldPos, cam));
    const dotProd = this.dot(dir, aimVec);

    if (dotProd > 0.985) { 
      // Nếu đang aim vào vùng hips, chuyển sang head
      const headWorldPos = this.multiplyMatrixAndPosition(this.headBindPose, this.headTransform.position);
      this.aimAt(headWorldPos, "bone_Head 🔒");
    } else {
      // Không aim vùng hips thì không làm gì (hoặc giữ trạng thái hiện tại)
      console.log("⛔ Không nhắm vào bone_Hips");
    }
  },

  runLoop() {
    setInterval(() => {
      this.checkAim();
    }, 16); // ~60FPS
  }
};
// HipsAimSwitch.runLoop(); // gộp vào AutoAimMasterLoop





// Giả lập API game (thay bằng API thực tế)
const GameAPI = {
  getVisibleTargets() {
    // Trả về danh sách mục tiêu đang nhìn thấy, ví dụ:
    // [{ id, position: {x,y,z}, velocity: {x,y,z} }, ...]
    return [
      { id: 1, position: { x: 5.0, y: 1.6, z: 10.0 }, velocity: { x: 0.2, y: 0, z: -0.1 } },
      { id: 2, position: { x: -3.2, y: 1.5, z: 7.4 }, velocity: { x: 0, y: 0, z: 0 } }
    ];
  },
  setCrosshairTarget(x, y, z) {
    console.log(`🎯 Aim at: ${x.toFixed(3)}, ${y.toFixed(3)}, ${z.toFixed(3)}`);
  }
};

const AimbotBoneHead = {
  boneHead: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale:    { x: 0.99999994, y: 1.00000012, z: 1.0 }
  },

  bindPose: {
    e00: -1.34559613E-13, e01: 8.881784E-14, e02: -1.0, e03: 0.487912,
    e10: -2.84512817E-06, e11: -1.0, e12: 8.881784E-14, e13: -2.842171E-14,
    e20: -1.0, e21: 2.84512817E-06, e22: -1.72951931E-13, e23: 0.0,
    e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
  },

  quaternionToMatrix(q) {
    const { x, y, z, w } = q;
    return [
      1 - 2 * (y * y + z * z), 2 * x * y - 2 * z * w,     2 * x * z + 2 * y * w, 0,
      2 * x * y + 2 * z * w,   1 - 2 * (x * x + z * z),   2 * y * z - 2 * x * w, 0,
      2 * x * z - 2 * y * w,   2 * y * z + 2 * x * w,     1 - 2 * (x * x + y * y), 0,
      0, 0, 0, 1
    ];
  },

  buildMatrix(scale, rotationMatrix, position) {
    return [
      [rotationMatrix[0] * scale.x, rotationMatrix[1] * scale.y, rotationMatrix[2] * scale.z, position.x],
      [rotationMatrix[4] * scale.x, rotationMatrix[5] * scale.y, rotationMatrix[6] * scale.z, position.y],
      [rotationMatrix[8] * scale.x, rotationMatrix[9] * scale.y, rotationMatrix[10] * scale.z, position.z],
      [0, 0, 0, 1]
    ];
  },

  multiplyMatrix4x4(a, b) {
    const result = Array.from({ length: 4 }, () => Array(4).fill(0));
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        for (let i = 0; i < 4; i++) {
          result[row][col] += a[row][i] * b[i][col];
        }
      }
    }
    return result;
  },

  getWorldHeadPosition() {
    const bone = this.boneHead;
    const bind = this.bindPose;

    const rotMatrix = this.quaternionToMatrix(bone.rotation);
    const local = this.buildMatrix(bone.scale, rotMatrix, bone.position);

    const bindMatrix = [
      [bind.e00, bind.e01, bind.e02, bind.e03],
      [bind.e10, bind.e11, bind.e12, bind.e13],
      [bind.e20, bind.e21, bind.e22, bind.e23],
      [bind.e30, bind.e31, bind.e32, bind.e33]
    ];

    const world = this.multiplyMatrix4x4(bindMatrix, local);

    return {
      x: world[0][3],
      y: world[1][3],
      z: world[2][3]
    };
  },

  kalman: {
    x: { x: 0, y: 0, z: 0 },
    P: 1, K: 0, Q: 0.005, R: 0.1,
    update(measurement) {
      for (let axis of ["x", "y", "z"]) {
        this.P += this.Q;
        this.K = this.P / (this.P + this.R);
        this.x[axis] = this.x[axis] + this.K * (measurement[axis] - this.x[axis]);
        this.P = (1 - this.K) * this.P;
      }
      return { ...this.x };
    }
  },

  lastTime: Date.now(),
  runLoop() {
    const loop = () => {
      const now = Date.now();
      const dt = (now - this.lastTime) / 1000 || 0.016;
      this.lastTime = now;

      const headPos = this.getWorldHeadPosition();
      const filtered = this.kalman.update(headPos);

      // Gọi hàm aim
      this.setCrosshairTarget(filtered);

      setTimeout(loop, 16); // 60 FPS
    };
    loop();
  },

  setCrosshairTarget(pos) {
    console.log("🎯 Aiming at HEAD:", pos.x.toFixed(4), pos.y.toFixed(4), pos.z.toFixed(4));
    // Bạn thay bằng API set aim thật tại đây
  }
};
// AimbotBoneHead.runLoop(); // gộp vào AutoAimMasterLoop


const DragAimLock_HardClamp = {
  headBindPose: {
    e00: -1.34559613E-13, e01: 8.881784E-14, e02: -1.0, e03: 0.487912,
    e10: -2.84512817E-06, e11: -1.0, e12: 8.881784E-14, e13: -2.842171E-14,
    e20: -1.0, e21: 2.84512817E-06, e22: -1.72951931E-13, e23: 0.0,
    e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
  },

  headTransform: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale:    { x: 0.99999994, y: 1.00000012, z: 1.0 }
  },

  lastPos: { x: 0, y: 0, z: 0 },

  quaternionToMatrix(q) {
    const { x, y, z, w } = q;
    return [
      1 - 2 * y * y - 2 * z * z, 2 * x * y - 2 * z * w,     2 * x * z + 2 * y * w,
      2 * x * y + 2 * z * w,     1 - 2 * x * x - 2 * z * z, 2 * y * z - 2 * x * w,
      2 * x * z - 2 * y * w,     2 * y * z + 2 * x * w,     1 - 2 * x * x - 2 * y * y
    ];
  },

  multiplyMatrix4x4(A, B) {
    const result = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; ++i)
      for (let j = 0; j < 4; ++j)
        for (let k = 0; k < 4; ++k)
          result[i][j] += A[i][k] * B[k][j];
    return result;
  },

  getWorldHeadPosition() {
    const bp = this.headBindPose;
    const t = this.headTransform;

    const bind = [
      [bp.e00, bp.e01, bp.e02, bp.e03],
      [bp.e10, bp.e11, bp.e12, bp.e13],
      [bp.e20, bp.e21, bp.e22, bp.e23],
      [bp.e30, bp.e31, bp.e32, bp.e33]
    ];

    const rot = this.quaternionToMatrix(t.rotation);

    const model = [
      [rot[0] * t.scale.x, rot[1] * t.scale.y, rot[2] * t.scale.z, t.position.x],
      [rot[3] * t.scale.x, rot[4] * t.scale.y, rot[5] * t.scale.z, t.position.y],
      [rot[6] * t.scale.x, rot[7] * t.scale.y, rot[8] * t.scale.z, t.position.z],
      [0, 0, 0, 1]
    ];

    const world = this.multiplyMatrix4x4(bind, model);
    return {
      x: world[0][3],
      y: world[1][3],
      z: world[2][3]
    };
  },

  clampAimToHead(target, maxDistance = 0.01) {
    const dx = target.x - this.lastPos.x;
    const dy = target.y - this.lastPos.y;
    const dz = target.z - this.lastPos.z;

    const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
    if (dist > maxDistance) {
      const scale = maxDistance / dist;
      return {
        x: this.lastPos.x + dx * scale,
        y: this.lastPos.y + dy * scale,
        z: this.lastPos.z + dz * scale
      };
    }
    return target;
  },

  dragLockFrame() {
    const headPos = this.getWorldHeadPosition();
    const clamped = this.clampAimToHead(headPos);
    this.lastPos = clamped;

    // 🚨 Thay bằng API ngắm thật sự nếu có
    if (typeof GameAPI !== 'undefined' && GameAPI.setCrosshairTarget) {
      GameAPI.setCrosshairTarget(clamped.x, clamped.y, clamped.z);
    } else {
      console.log("🎯 [LOCK] bone_Head:", clamped.x.toFixed(4), clamped.y.toFixed(4), clamped.z.toFixed(4));
    }
  },

  run() {
    const interval = setInterval(() => {
      this.dragLockFrame();
    }, 16); // ~60fps
  }
};
// DragAimLock_HardClamp.run(); // gộp vào AutoAimMasterLoop
const AimLockAdvanced = {
  // Tọa độ và bindpose bone_Head
  boneHead: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale: { x: 0.99999994, y: 1.00000012, z: 1.0 },
    bindPose: {
      e00: -1.34559613E-13, e01: 8.881784E-14, e02: -1.0, e03: 0.487912,
      e10: -2.84512817E-06, e11: -1.0, e12: 8.881784E-14, e13: -2.842171E-14,
      e20: -1.0, e21: 2.84512817E-06, e22: -1.72951931E-13, e23: 0.0,
      e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
    }
  },

  kalman: {
    Q: 0.01, R: 0.1, P: 1, K: 0.5,
    x: { x: 0, y: 0, z: 0 },
    update(measured) {
      for (let axis of ["x", "y", "z"]) {
        this.P += this.Q;
        this.K = this.P / (this.P + this.R);
        this.x[axis] += this.K * (measured[axis] - this.x[axis]);
        this.P *= (1 - this.K);
      }
      return { ...this.x };
    }
  },

  velocity: { x: 0, y: 0, z: 0 },
  lastPos: null,
  lastTime: Date.now(),

  quaternionToMatrix(q) {
    const { x, y, z, w } = q;
    return [
      1 - 2 * y * y - 2 * z * z, 2 * x * y - 2 * z * w,     2 * x * z + 2 * y * w, 0,
      2 * x * y + 2 * z * w,     1 - 2 * x * x - 2 * z * z, 2 * y * z - 2 * x * w, 0,
      2 * x * z - 2 * y * w,     2 * y * z + 2 * x * w,     1 - 2 * x * x - 2 * y * y, 0,
      0, 0, 0, 1
    ];
  },

  multiplyMatrices(A, B) {
    const result = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 4; j++)
        for (let k = 0; k < 4; k++)
          result[i][j] += A[i][k] * B[k][j];
    return result;
  },

  getWorldHeadPosition() {
    const t = this.boneHead;
    const bp = t.bindPose;

    const bind = [
      [bp.e00, bp.e01, bp.e02, bp.e03],
      [bp.e10, bp.e11, bp.e12, bp.e13],
      [bp.e20, bp.e21, bp.e22, bp.e23],
      [bp.e30, bp.e31, bp.e32, bp.e33]
    ];

    const rot = this.quaternionToMatrix(t.rotation);
    const model = [
      [rot[0] * t.scale.x, rot[1] * t.scale.y, rot[2] * t.scale.z, t.position.x],
      [rot[4] * t.scale.x, rot[5] * t.scale.y, rot[6] * t.scale.z, t.position.y],
      [rot[8] * t.scale.x, rot[9] * t.scale.y, rot[10] * t.scale.z, t.position.z],
      [0, 0, 0, 1]
    ];

    const worldMatrix = this.multiplyMatrices(bind, model);
    return {
      x: worldMatrix[0][3],
      y: worldMatrix[1][3],
      z: worldMatrix[2][3]
    };
  },

  setAim(x, y, z) {
    console.log("🎯 AimLock to bone_Head:", x.toFixed(6), y.toFixed(6), z.toFixed(6));
    // Bạn thay bằng API thật nếu có như: GameAPI.setAim(x, y, z);
  },

  update() {
    const now = Date.now();
    const dt = (now - this.lastTime) / 1000;
    const current = this.getWorldHeadPosition();

    if (this.lastPos) {
      this.velocity = {
        x: (current.x - this.lastPos.x) / dt,
        y: (current.y - this.lastPos.y) / dt,
        z: (current.z - this.lastPos.z) / dt
      };
    }

    const predicted = {
      x: current.x + this.velocity.x * dt,
      y: current.y + this.velocity.y * dt,
      z: current.z + this.velocity.z * dt
    };

    const filtered = this.kalman.update(predicted);
    this.setAim(filtered.x, filtered.y, filtered.z);

    this.lastPos = current;
    this.lastTime = now;
  },

  run(interval = 16) {
    setInterval(() => {
      this.update();
    }, interval);
  }
};
// AimLockAdvanced.run(); // gộp vào AutoAimMasterLoop

const StrongPrecisionAimLock = {
  boneHead: {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale: { x: 0.99999994, y: 1.00000012, z: 1.0 },
    bindPose: {
      e00: -1.34559613E-13, e01: 8.881784E-14, e02: -1.0, e03: 0.487912,
      e10: -2.84512817E-06, e11: -1.0, e12: 8.881784E-14, e13: -2.842171E-14,
      e20: -1.0, e21: 2.84512817E-06, e22: -1.72951931E-13, e23: 0.0,
      e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
    }
  },

  kalman: {
    Q: 0.001, R: 0.01, P: 1, K: 0.5,
    x: { x: 0, y: 0, z: 0 },
    update(measured) {
      for (let axis of ["x", "y", "z"]) {
        this.P += this.Q;
        this.K = this.P / (this.P + this.R);
        this.x[axis] += this.K * (measured[axis] - this.x[axis]);
        this.P *= (1 - this.K);
      }
      return { ...this.x };
    }
  },

  lastPos: null,
  velocity: { x: 0, y: 0, z: 0 },
  lastTime: Date.now(),

  quaternionToMatrix(q) {
    const { x, y, z, w } = q;
    return [
      1 - 2 * y * y - 2 * z * z, 2 * x * y - 2 * z * w,     2 * x * z + 2 * y * w, 0,
      2 * x * y + 2 * z * w,     1 - 2 * x * x - 2 * z * z, 2 * y * z - 2 * x * w, 0,
      2 * x * z - 2 * y * w,     2 * y * z + 2 * x * w,     1 - 2 * x * x - 2 * y * y, 0,
      0, 0, 0, 1
    ];
  },

  multiplyMatrices(A, B) {
    const result = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 4; j++)
        for (let k = 0; k < 4; k++)
          result[i][j] += A[i][k] * B[k][j];
    return result;
  },

  getWorldHeadPosition() {
    const t = this.boneHead;
    const bp = t.bindPose;
    const bind = [
      [bp.e00, bp.e01, bp.e02, bp.e03],
      [bp.e10, bp.e11, bp.e12, bp.e13],
      [bp.e20, bp.e21, bp.e22, bp.e23],
      [bp.e30, bp.e31, bp.e32, bp.e33]
    ];
    const rot = this.quaternionToMatrix(t.rotation);
    const model = [
      [rot[0] * t.scale.x, rot[1] * t.scale.y, rot[2] * t.scale.z, t.position.x],
      [rot[4] * t.scale.x, rot[5] * t.scale.y, rot[6] * t.scale.z, t.position.y],
      [rot[8] * t.scale.x, rot[9] * t.scale.y, rot[10] * t.scale.z, t.position.z],
      [0, 0, 0, 1]
    ];
    const world = this.multiplyMatrices(bind, model);
    return { x: world[0][3], y: world[1][3], z: world[2][3] };
  },

  clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  },

  setAim(x, y, z) {
    console.log("🎯 Precision Aim:", x.toFixed(6), y.toFixed(6), z.toFixed(6));
    // Thay thế hàm này bằng API set aim thật nếu có
  },

  updateAim() {
    const now = Date.now();
    const dt = (now - this.lastTime) / 1000 || 0.016;

    const current = this.getWorldHeadPosition();
    if (this.lastPos) {
      this.velocity = {
        x: (current.x - this.lastPos.x) / dt,
        y: (current.y - this.lastPos.y) / dt,
        z: (current.z - this.lastPos.z) / dt
      };
    }

    // Dự đoán chuyển động
    const predicted = {
      x: current.x + this.velocity.x * dt,
      y: current.y + this.velocity.y * dt,
      z: current.z + this.velocity.z * dt
    };

    // Kalman Filter
    const filtered = this.kalman.update(predicted);

    // Giới hạn khoảng lệch (nếu muốn)
    const clamped = {
      x: this.clamp(filtered.x, current.x - 0.1, current.x + 0.1),
      y: this.clamp(filtered.y, current.y - 0.1, current.y + 0.1),
      z: this.clamp(filtered.z, current.z - 0.1, current.z + 0.1)
    };

    this.setAim(clamped.x, clamped.y, clamped.z);

    this.lastPos = current;
    this.lastTime = now;
  },

  run(interval = 16) {
    setInterval(() => this.updateAim(), interval);
  }
};
// StrongPrecisionAimLock.run(); // gộp vào AutoAimMasterLoop

const InstantAimLock = {
  boneHead: {
    position: {
      x: -0.0456970781,
      y: -0.004478302,
      z: -0.0200432576
    },
    rotation: {
      x: 0.0258174837,
      y: -0.08611039,
      z: -0.1402113,
      w: 0.9860321
    },
    scale: {
      x: 0.99999994,
      y: 1.00000012,
      z: 1.0
    },
    bindPose: {
      e00: -1.34559613E-13, e01: 8.881784E-14, e02: -1.0, e03: 0.487912,
      e10: -2.84512817E-06, e11: -1.0, e12: 8.881784E-14, e13: -2.842171E-14,
      e20: -1.0, e21: 2.84512817E-06, e22: -1.72951931E-13, e23: 0.0,
      e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
    }
  },

  quaternionToMatrix(q) {
    const { x, y, z, w } = q;
    return [
      1 - 2 * y * y - 2 * z * z,   2 * x * y - 2 * z * w,     2 * x * z + 2 * y * w, 0,
      2 * x * y + 2 * z * w,       1 - 2 * x * x - 2 * z * z, 2 * y * z - 2 * x * w, 0,
      2 * x * z - 2 * y * w,       2 * y * z + 2 * x * w,     1 - 2 * x * x - 2 * y * y, 0,
      0, 0, 0, 1
    ];
  },

  multiplyMatrices(A, B) {
    const result = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 4; j++)
        for (let k = 0; k < 4; k++)
          result[i][j] += A[i][k] * B[k][j];
    return result;
  },

  getBoneHeadWorldPosition() {
    const t = this.boneHead;
    const bp = t.bindPose;
    const bind = [
      [bp.e00, bp.e01, bp.e02, bp.e03],
      [bp.e10, bp.e11, bp.e12, bp.e13],
      [bp.e20, bp.e21, bp.e22, bp.e23],
      [bp.e30, bp.e31, bp.e32, bp.e33]
    ];
    const rot = this.quaternionToMatrix(t.rotation);
    const model = [
      [rot[0] * t.scale.x, rot[1] * t.scale.y, rot[2] * t.scale.z, t.position.x],
      [rot[4] * t.scale.x, rot[5] * t.scale.y, rot[6] * t.scale.z, t.position.y],
      [rot[8] * t.scale.x, rot[9] * t.scale.y, rot[10] * t.scale.z, t.position.z],
      [0, 0, 0, 1]
    ];
    const world = this.multiplyMatrices(bind, model);
    return { x: world[0][3], y: world[1][3], z: world[2][3] };
  },

  setAim(x, y, z) {
    console.log("🎯 Drag Lock (Instant) to bone_Head:", x.toFixed(6), y.toFixed(6), z.toFixed(6));
    // Gắn vào API thật nếu có:
    // GameAPI.setCrosshairTarget(x, y, z);
  },

  dragNow() {
    const headPos = this.getBoneHeadWorldPosition();
    this.setAim(headPos.x, headPos.y, headPos.z);
  }
};

// Gọi hàm khi cần drag: 
// ví dụ trong khung onDrag hoặc khung update frame:
InstantAimLock.dragNow();


const NeckTrackerLock = {
  boneNeck: {
    position: {
      x: -0.143705,
      y: -0.010202,
      z: 0.0
    },
    rotation: {
      x: 0.0,
      y: 0.0,
      z: -0.14392,
      w: 0.989589
    },
    scale: {
      x: 1.0,
      y: 1.0,
      z: 1.0
    },
    bindPose: {
      e00: 0.0,     e01: 0.0,     e02: -1.0,    e03: 0.535892,
      e10: 1E-06,   e11: -1.0,    e12: 0.0,     e13: 0.000255,
      e20: -1.0,    e21: -1E-06,  e22: 0.0,     e23: 0.0,
      e30: 0.0,     e31: 0.0,     e32: 0.0,     e33: 1.0
    }
  },

  kalman: {
    Q: 0.00001, R: 0.0001, P: 1, K: 0.5,
    x: { x: 0, y: 0, z: 0 },
    update(measure) {
      for (let k of ['x', 'y', 'z']) {
        this.P += this.Q;
        this.K = this.P / (this.P + this.R);
        this.x[k] += this.K * (measure[k] - this.x[k]);
        this.P *= (1 - this.K);
      }
      return { ...this.x };
    }
  },

  quaternionToMatrix(q) {
    const { x, y, z, w } = q;
    return [
      1 - 2*y*y - 2*z*z, 2*x*y - 2*z*w,     2*x*z + 2*y*w,     0,
      2*x*y + 2*z*w,     1 - 2*x*x - 2*z*z, 2*y*z - 2*x*w,     0,
      2*x*z - 2*y*w,     2*y*z + 2*x*w,     1 - 2*x*x - 2*y*y, 0,
      0, 0, 0, 1
    ];
  },

  multiply4x4(A, B) {
    const out = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 4; j++)
        for (let k = 0; k < 4; k++)
          out[i][j] += A[i][k] * B[k][j];
    return out;
  },

  getWorldNeckPosition() {
    const t = this.boneNeck;
    const bp = t.bindPose;

    const bind = [
      [bp.e00, bp.e01, bp.e02, bp.e03],
      [bp.e10, bp.e11, bp.e12, bp.e13],
      [bp.e20, bp.e21, bp.e22, bp.e23],
      [bp.e30, bp.e31, bp.e32, bp.e33]
    ];

    const rot = this.quaternionToMatrix(t.rotation);

    const model = [
      [rot[0]*t.scale.x, rot[1]*t.scale.y, rot[2]*t.scale.z, t.position.x],
      [rot[4]*t.scale.x, rot[5]*t.scale.y, rot[6]*t.scale.z, t.position.y],
      [rot[8]*t.scale.x, rot[9]*t.scale.y, rot[10]*t.scale.z, t.position.z],
      [0, 0, 0, 1]
    ];

    const world = this.multiply4x4(bind, model);

    return {
      x: world[0][3],
      y: world[1][3],
      z: world[2][3]
    };
  },

  setAim(x, y, z) {
    console.log("🎯 Lock Neck:", x.toFixed(6), y.toFixed(6), z.toFixed(6));
    // GameAPI.setCrosshairTarget(x, y, z); // nếu dùng trong hệ thống thực
  },

  run() {
    const loop = () => {
      const raw = this.getWorldNeckPosition();
      const filtered = this.kalman.update(raw);
      this.setAim(filtered.x, filtered.y, filtered.z);
      if (typeof requestAnimationFrame !== "undefined") requestAnimationFrame(loop);
      else setTimeout(loop, 16);
    };
    loop();
  }
};
// NeckTrackerLock.run(); // gộp vào AutoAimMasterLoop

const StableLock = {
  boneHead: {
    position: {
      x: -0.0456970781,
      y: -0.004478302,
      z: -0.0200432576
    },
    rotation: {
      x: 0.0258174837,
      y: -0.08611039,
      z: -0.1402113,
      w: 0.9860321
    },
    scale: {
      x: 0.99999994,
      y: 1.00000012,
      z: 1.0
    },
    bindPose: {
      e00: -1.34559613E-13, e01: 8.881784E-14, e02: -1.0, e03: 0.487912,
      e10: -2.84512817E-06, e11: -1.0, e12: 8.881784E-14, e13: -2.842171E-14,
      e20: -1.0, e21: 2.84512817E-06, e22: -1.72951931E-13, e23: 0.0,
      e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
    }
  },

  kalman: {
    Q: 0.00001, R: 0.0001, P: 1, K: 0.5,
    x: { x: 0, y: 0, z: 0 },
    update(measure) {
      for (let k of ['x', 'y', 'z']) {
        this.P += this.Q;
        this.K = this.P / (this.P + this.R);
        this.x[k] = this.x[k] + this.K * (measure[k] - this.x[k]);
        this.P *= (1 - this.K);
      }
      return { ...this.x };
    }
  },

  quaternionToMatrix(q) {
    const { x, y, z, w } = q;
    return [
      1 - 2 * y * y - 2 * z * z,   2 * x * y - 2 * z * w,     2 * x * z + 2 * y * w, 0,
      2 * x * y + 2 * z * w,       1 - 2 * x * x - 2 * z * z, 2 * y * z - 2 * x * w, 0,
      2 * x * z - 2 * y * w,       2 * y * z + 2 * x * w,     1 - 2 * x * x - 2 * y * y, 0,
      0, 0, 0, 1
    ];
  },

  multiply4x4(A, B) {
    const out = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 4; j++)
        for (let k = 0; k < 4; k++)
          out[i][j] += A[i][k] * B[k][j];
    return out;
  },

  getWorldHeadPosition() {
    const t = this.boneHead;
    const bp = t.bindPose;
    const bind = [
      [bp.e00, bp.e01, bp.e02, bp.e03],
      [bp.e10, bp.e11, bp.e12, bp.e13],
      [bp.e20, bp.e21, bp.e22, bp.e23],
      [bp.e30, bp.e31, bp.e32, bp.e33]
    ];
    const rot = this.quaternionToMatrix(t.rotation);
    const model = [
      [rot[0]*t.scale.x, rot[1]*t.scale.y, rot[2]*t.scale.z, t.position.x],
      [rot[4]*t.scale.x, rot[5]*t.scale.y, rot[6]*t.scale.z, t.position.y],
      [rot[8]*t.scale.x, rot[9]*t.scale.y, rot[10]*t.scale.z, t.position.z],
      [0, 0, 0, 1]
    ];
    const world = this.multiply4x4(bind, model);
    return {
      x: world[0][3],
      y: world[1][3],
      z: world[2][3]
    };
  },

  getRecoilOffset() {
    // Recoil compensation - đây là nơi bạn có thể thay đổi để phù hợp vũ khí
    return {
      x: 0.0003,  // đẩy ngược lên tí cho giảm lệch
      y: 0.0002,
      z: 0.0001
    };
  },

  applyRecoilCompensation(pos) {
    const offset = this.getRecoilOffset();
    return {
      x: pos.x - offset.x,
      y: pos.y - offset.y,
      z: pos.z - offset.z
    };
  },

  setAim(x, y, z) {
    console.log("🎯 Aim with Recoil Compensation:", x.toFixed(6), y.toFixed(6), z.toFixed(6));
    // GameAPI.setCrosshairTarget(x, y, z); // mở dòng này nếu đã tích hợp với API game
  },

  runStableLock() {
    const update = () => {
      const rawPos = this.getWorldHeadPosition();
      const filtered = this.kalman.update(rawPos);
      const finalAim = this.applyRecoilCompensation(filtered);
      this.setAim(finalAim.x, finalAim.y, finalAim.z);

      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(update);
      } else {
        setTimeout(update, 16);
      }
    };
    update();
  }
};

// Chạy hệ thống aimlock mượt có bù giật
StableLock.runStableLock();

const AimLockWithRecoilComp = {
  boneHead: {
    position: {
      x: -0.0456970781,
      y: -0.004478302,
      z: -0.0200432576
    },
    rotation: {
      x: 0.0258174837,
      y: -0.08611039,
      z: -0.1402113,
      w: 0.9860321
    },
    scale: {
      x: 0.99999994,
      y: 1.00000012,
      z: 1.0
    },
    bindPose: {
      e00: -1.34559613E-13, e01: 8.881784E-14, e02: -1.0, e03: 0.487912,
      e10: -2.84512817E-06, e11: -1.0, e12: 8.881784E-14, e13: -2.842171E-14,
      e20: -1.0, e21: 2.84512817E-06, e22: -1.72951931E-13, e23: 0.0,
      e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
    }
  },

  kalman: {
    Q: 0.00001, R: 0.0001, P: 1, K: 0.5,
    x: { x: 0, y: 0, z: 0 },
    update(measure) {
      for (let k of ['x', 'y', 'z']) {
        this.P += this.Q;
        this.K = this.P / (this.P + this.R);
        this.x[k] += this.K * (measure[k] - this.x[k]);
        this.P *= (1 - this.K);
      }
      return { ...this.x };
    }
  },

  quaternionToMatrix(q) {
    const { x, y, z, w } = q;
    return [
      1 - 2*y*y - 2*z*z, 2*x*y - 2*z*w,   2*x*z + 2*y*w, 0,
      2*x*y + 2*z*w,     1 - 2*x*x - 2*z*z, 2*y*z - 2*x*w, 0,
      2*x*z - 2*y*w,     2*y*z + 2*x*w,   1 - 2*x*x - 2*y*y, 0,
      0, 0, 0, 1
    ];
  },

  multiply4x4(A, B) {
    const out = Array(4).fill(0).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 4; j++)
        for (let k = 0; k < 4; k++)
          out[i][j] += A[i][k] * B[k][j];
    return out;
  },

  getWorldHeadPosition() {
    const t = this.boneHead;
    const bp = t.bindPose;
    const bind = [
      [bp.e00, bp.e01, bp.e02, bp.e03],
      [bp.e10, bp.e11, bp.e12, bp.e13],
      [bp.e20, bp.e21, bp.e22, bp.e23],
      [bp.e30, bp.e31, bp.e32, bp.e33]
    ];
    const rot = this.quaternionToMatrix(t.rotation);
    const model = [
      [rot[0]*t.scale.x, rot[1]*t.scale.y, rot[2]*t.scale.z, t.position.x],
      [rot[4]*t.scale.x, rot[5]*t.scale.y, rot[6]*t.scale.z, t.position.y],
      [rot[8]*t.scale.x, rot[9]*t.scale.y, rot[10]*t.scale.z, t.position.z],
      [0, 0, 0, 1]
    ];
    const world = this.multiply4x4(bind, model);
    return {
      x: world[0][3],
      y: world[1][3],
      z: world[2][3]
    };
  },

  getRecoilOffset() {
    // Điều chỉnh bù giật tại đây tùy súng
    return {
      x: 0.0002,
      y: 0.00015,
      z: 0.0001
    };
  },

  applyRecoilCompensation(pos) {
    const offset = this.getRecoilOffset();
    return {
      x: pos.x - offset.x,
      y: pos.y - offset.y,
      z: pos.z - offset.z
    };
  },

  setAim(x, y, z) {
    console.log("🎯 AimLock with Recoil:", x.toFixed(6), y.toFixed(6), z.toFixed(6));
    // GameAPI.setCrosshairTarget(x, y, z); // dùng nếu có tích hợp với game
  },

  run() {
    const loop = () => {
      const head = this.getWorldHeadPosition();
      const smoothed = this.kalman.update(head);
      const aim = this.applyRecoilCompensation(smoothed);
      this.setAim(aim.x, aim.y, aim.z);
      if (typeof requestAnimationFrame !== 'undefined') requestAnimationFrame(loop);
      else setTimeout(loop, 16); // fallback nếu không có rAF
    };
    loop();
  }
};

// Bắt đầu chạy hệ thống AimLock
// AimLockWithRecoilComp.run(); // gộp vào AutoAimMasterLoop

// ====================== AUTO AIM MASTER LOOP ======================
const AutoAimMasterLoop = {
  systems: [],
  register(system, methodName) {
    if (system && typeof system[methodName] === "function") {
      this.systems.push(() => system[methodName]());
    }
  },
  run(interval = 16) {
    setInterval(() => {
      for (const update of this.systems) update();
    }, interval);
  }
};

// Đăng ký tất cả hệ thống auto-aim
AutoAimMasterLoop.register(BoneAimSwitch, "checkAndAim");
AutoAimMasterLoop.register(SmartSpine1AimSwitch, "checkAimSwitch");
AutoAimMasterLoop.register(SmartClavicleSwitch, "checkAim");
AutoAimMasterLoop.register(SmartRightClavSwitch, "checkAim");
AutoAimMasterLoop.register(SmartLeftForearmSwitch, "checkAim");
AutoAimMasterLoop.register(RightForeArmAimSwitch, "checkAim");
AutoAimMasterLoop.register(LeftLegAimSwitch, "checkAim");
AutoAimMasterLoop.register(RightLegAimSwitch, "checkAim");
AutoAimMasterLoop.register(HipsAimSwitch, "checkAim");

AutoAimMasterLoop.register(AimbotBoneHead, "runLoop");
AutoAimMasterLoop.register(DragAimLock_HardClamp, "dragLockFrame");
AutoAimMasterLoop.register(AimLockAdvanced, "update");
AutoAimMasterLoop.register(StrongPrecisionAimLock, "updateAim");
AutoAimMasterLoop.register(InstantAimLock, "dragNow");
AutoAimMasterLoop.register(NeckTrackerLock, "run");

// 🚀 Khởi chạy tất cả hệ thống
AutoAimMasterLoop.run();
const GamePackages = {
  GamePackage1: "com.dts.freefireth",
  GamePackage2: "com.dts.freefiremax"
};
  const boneOffset = {
  x: -0.04089227,
  y:  0.00907892,
  z:  0.02748467
};
    AimHeadLock: {
        aimBone: "bone_Head",
        autoLock: true,
        lockInjection: true,
        lockStrength: "maximum",
        snapBias: 1.0,
        trackingSpeed: 1.0,
        dragCorrectionSpeed: 5.0,
        snapToleranceAngle: 1.5,
        maxLockAngle: 360,
        stickiness: "high",
        headStickPriority: true,
        headLockPriority: true,
        disableBodyRecenter: true,
        minDistanceToLock: 0.0,
        boneHead_position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        boneHead_rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        boneHead_scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoAimLockHeadOnFire_StableDrag: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileFiring: true,
        dragSmoothFactor: 0.85,
        maxDragDistance: 0.02,
        snapBackToHead: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        disableBodyRecenter: true,
        smoothing: 1.0,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AimNeckLock: {
        aimTrackingBone: "bone_Neck",
        autoLock: true,
        lockStrength: "maximum",
        snapBias: 1.0,
        trackingSpeed: 1.0,
        dragCorrectionSpeed: 4.8,
        snapToleranceAngle: 0.0,
        maxLockAngle: 360,
        stickiness: "high",
        neckStickPriority: true,
        boneNeck_position: { x: -0.128512, y: 0.0, z: 0.0 },
        boneNeck_rotation: { x: -0.012738, y: -0.002122, z: 0.164307, w: 0.986325 },
        boneNeck_scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AntiRecoilAimStabilizer: {
        enabled: true,
        targetBone: "bone_Head",
        autoCompensateRecoil: true,
        compensationStrength: 0.95,
        smoothFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        applyWhileFiring: true,
        predictionFactor: 0.0,
       adaptToWeapon: true,    
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoAimHeadOnFire: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        headLockPriority: true,
        disableBodyRecenter: true,
        fireHoldLock: true,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    HoldCrosshairOnHeadWhenFire: {
        enabled: true,
        targetBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileFiring: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.00001,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        disableBodyRecenter: true,
        smoothing: 0.85,
        boneOffsetHoldCrosshairOnHeadWhenFire: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetHoldCrosshairOnHeadWhenFire: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    StableDragLockHead: {
        enabled: true,
        targetBone: "bone_Head",
        dragSmoothFactor: 0.85,
        maxDragDistance: 0.02,
        snapBackToHead: true,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        headLockPriority: true,
        predictionFactor: 0.0,
        boneOffsetStableDragLockHead: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetStableDragLockHead: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoTrackingLock: {
        enabled: true,
        trackingBone: "bone_Head",
        autoSwitchToNeck: true,
        trackingSpeed: 10.0,
        predictionFactor: 0.0001,
        snapToleranceAngle: 0.0,
        maxLockDistance: 200.0,
        stickiness: "extreme",
        ignoreObstacles: true,
        recenterDelay: 0,
        boneOffsetAutoTrackingLock: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetAutoTrackingLock: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoShotHead: { autoHeadshot: true, aimListextension: true },
    FixLagBoost: { fixResourceTask: true },
    CloseLauncherRestore: { closeLauncher: true, forceRestore: true }
};
const FreeFireAutoHeadLockModule = (() => {

  // ===== Vector3 =====
  class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
      this.x = x; this.y = y; this.z = z;
    }
    subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
    magnitude() { return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); }
    normalize() {
      let mag = this.magnitude();
      return mag === 0 ? new Vector3(0,0,0) : new Vector3(this.x/mag, this.y/mag, this.z/mag);
    }
    add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
  }

  // ===== Kalman Filter =====
  class KalmanFilter {
    constructor(r = 0.01, q = 0.1) {
      this.r = r; this.q = q;
      this.p = 1; this.x = 0; this.k = 0;
    }
    filter(value) {
      this.p += this.q;
      this.k = this.p / (this.p + this.r);
      this.x += this.k * (value - this.x);
      this.p *= (1 - this.k);
      return this.x;
    }
  }
// == Enhanced Weapon Profiles ==
const WeaponProfiles = {
  "AK47": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M4A1": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "SCAR": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "FAMAS": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "GROZA": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "AN94": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "XM8": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "MP40": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "UMP": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "P90": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "MP5": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "THOMPSON": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "AWM": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "KAR98K": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M82B": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M1014": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "SPAS12": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "MAG7": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M1887": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M249": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "GATLING": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "DESERT_EAGLE": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M500": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "G18": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "DEFAULT": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 }
};

// == Dynamic Sensitivity ==
function getAdvancedDragSensitivity(currentAim, targetPos, velocity, profile, baseSensitivity = 1.0) {
  const dx = currentAim.x - targetPos.x;
  const dy = currentAim.y - targetPos.y;
  const dz = currentAim.z - targetPos.z;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const maxRadius = profile.lockRadius || 360.0;
  const distanceFactor = Math.max(0.1, 1 - (dist / maxRadius));

  const velocityMagnitude = velocity.length();
  const velocityFactor = 1 + (velocityMagnitude * 0.5);

  const weaponSensitivity = profile.dragSensitivity || 3.0;

  return baseSensitivity * weaponSensitivity * distanceFactor * velocityFactor;
}

// == Aim Lock System ==
class AimLockUltimate {
  constructor(currentWeapon = "DEFAULT") {
    this.profile = WeaponProfiles[currentWeapon] || WeaponProfiles["DEFAULT"];
    this.weapon = currentWeapon;

    this.kalman = {
      x: new AdvancedKalmanFilter(0.005, 0.000002),
      y: new AdvancedKalmanFilter(0.005, 0.000002),
      z: new AdvancedKalmanFilter(0.005, 0.000002)
    };

    this.prevPos = null;
    this.velocity = Vector3.zero();
    this.acceleration = Vector3.zero();
    this.recoilOffset = Vector3.zero();
    this.lastUpdate = Date.now();
    this.lockHistory = [];
    this.currentAim = Vector3.zero();

    this.predictionTime = 0.0001;
    this.smoothingFactor = 0.0001;
    this.lockConfidence = 0.0;
  }

  updateLockConfidence(enemy, player) {
    let confidence = 0.0;
    if (enemy.visible) confidence += 0.3;
    if (enemy.inFov) confidence += 0.3;
    if (enemy.headDetected) confidence += 0.3;
    if (player.fpsStable) confidence += 0.1;
    this.lockConfidence = Math.min(confidence, 1.0);
  }

  updateEnemyPosition(rawPos) {
    const now = Date.now();
    const dt = Math.min((now - this.lastUpdate) / 1000, 0.1);

    if (this.prevPos && dt > 0) {
      const newVelocity = rawPos.subtract(this.prevPos).multiplyScalar(1 / dt);
      const newAcceleration = newVelocity.subtract(this.velocity).multiplyScalar(1 / dt);

      this.velocity = this.velocity.lerp(newVelocity, 0.3);
      this.acceleration = this.acceleration.lerp(newAcceleration, 0.2);
    }

    this.prevPos = rawPos.clone();
    this.lastUpdate = now;

    const filtered = new Vector3(
      this.kalman.x.adaptiveFilter(rawPos.x),
      this.kalman.y.adaptiveFilter(rawPos.y),
      this.kalman.z.adaptiveFilter(rawPos.z)
    );

    return filtered;
  }

  predictPosition(filteredPos) {
    const velocityPrediction = this.velocity.multiplyScalar(this.predictionTime);
    const accelerationPrediction = this.acceleration.multiplyScalar(0.5 * this.predictionTime * this.predictionTime);
    return filteredPos.add(velocityPrediction).add(accelerationPrediction);
  }

  applyAdvancedRecoilCompensation(recoilOffset) {
    const smoothing = this.profile.recoilSmooth || 0.9;
    const strength = this.profile.aimLockStrength || 10.0;
    const compensated = recoilOffset.multiplyScalar(strength);
    this.recoilOffset = this.recoilOffset.multiplyScalar(smoothing).add(compensated.multiplyScalar(1 - smoothing));
  }

  calculateLockConfidence(currentAim, targetPos) {
    const distance = currentAim.subtract(targetPos).length();
    const maxDistance = this.profile.lockRadius || 360.0;
    this.lockConfidence = Math.max(0, 1 - (distance / maxDistance));
    return this.lockConfidence;
  }

  dragAndLockHead(predictedPos, currentAim) {
    const sensitivity = getAdvancedDragSensitivity(currentAim, predictedPos, this.velocity, this.profile);
    const targetDelta = predictedPos.subtract(this.recoilOffset).subtract(currentAim);
    const adjustedDelta = targetDelta.multiplyScalar(sensitivity * this.smoothingFactor);
    const accuracyBoost = this.profile.accuracyBoost || 10.0;
    const finalAim = currentAim.add(adjustedDelta).multiplyScalar(accuracyBoost);
    this.currentAim = finalAim;
    this.setCrosshair(finalAim);
    return finalAim;
  }

  setCrosshair(vec3) {
    console.log(`🎯 [${this.weapon}] Locking Aim: ${vec3.x.toFixed(6)}, ${vec3.y.toFixed(6)}, ${vec3.z.toFixed(6)} | Confidence: ${(this.lockConfidence * 100).toFixed(1)}%`);
  }

  update(enemyHeadPos, recoilOffset, currentAim) {
    this.currentAim = currentAim;

    const filteredPos = this.updateEnemyPosition(enemyHeadPos);
    const predictedPos = this.predictPosition(filteredPos);
    this.applyAdvancedRecoilCompensation(recoilOffset);
    this.calculateLockConfidence(currentAim, predictedPos);
    const newAim = this.dragAndLockHead(predictedPos, currentAim);

    this.lockHistory.push({
      timestamp: Date.now(),
      confidence: this.lockConfidence,
      distance: currentAim.subtract(predictedPos).length()
    });

    if (this.lockHistory.length > 100) {
      this.lockHistory.shift();
    }

    return newAim;
  }

  getPerformanceStats() {
    if (this.lockHistory.length === 0) return null;

    const recent = this.lockHistory.slice(-20);
    const avgConfidence = recent.reduce((sum, h) => sum + h.confidence, 0) / recent.length;
    const avgDistance = recent.reduce((sum, h) => sum + h.distance, 0) / recent.length;

    return {
      avgConfidence: avgConfidence * 100,
      avgDistance: avgDistance * 1000,
      weapon: this.weapon,
      samples: recent.length
    };
  }
}

// == Trigger Lock ==
function advancedTriggerLock(currentAim, targetPos, velocity, profile, baseThreshold = 0.003) {
  const dx = currentAim.x - targetPos.x;
  const dy = currentAim.y - targetPos.y;
  const dz = currentAim.z - targetPos.z;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const weaponThreshold = baseThreshold * (profile.lockRadius || 1.0);
  const velocityMagnitude = velocity.length();
  const velocityAdjustment = 1 + (velocityMagnitude * 0.1);
  const adjustedThreshold = weaponThreshold * velocityAdjustment;

  return {
    shouldFire: dist <= adjustedThreshold,
    distance: dist,
    threshold: adjustedThreshold,
    confidence: Math.max(0, 1 - (dist / adjustedThreshold))
  };
}

// ... (Vector3, AdvancedKalmanFilter, WeaponProfiles, AimLockUltimate, TriggerLock từ phần trước giữ nguyên)

// == Enhanced Usage Example ==
const boneHeadPos = new Vector3(-0.0456970781, -0.004478302, -0.0200432576);
const recoilOffset = new Vector3(0.0, 0.0, 0.0);
const currentAim = new Vector3(-0.0456970781, -0.004478302, -0.0200432576);
const weaponsToTest = ["M1887", "MP40", "M1014", "UMP"];

function runInfiniteLoop() {
  for (const currentWeapon of weaponsToTest) {
    const enhancedAimSystem = new AimLockUltimate(currentWeapon);
    const newAim = enhancedAimSystem.update(boneHeadPos, recoilOffset, currentAim);

    const triggerResult = advancedTriggerLock(
      newAim,
      boneHeadPos,
      enhancedAimSystem.velocity,
      enhancedAimSystem.profile
    );

    if (triggerResult.shouldFire) {
      console.log(`🔥 FIRE - ${currentWeapon} | Confidence: ${(triggerResult.confidence * 100).toFixed(1)}% | Distance: ${(triggerResult.distance * 1000).toFixed(2)}mm`);
    } else {
      console.log(`🚫 NO FIRE - ${currentWeapon} | Distance: ${(triggerResult.distance * 1000).toFixed(2)}mm`);
    }

    const stats = enhancedAimSystem.getPerformanceStats();
    if (stats) {
      console.log(`📊 [${currentWeapon}] Confidence: ${stats.avgConfidence.toFixed(1)}%, Distance: ${stats.avgDistance.toFixed(2)}mm`);
    }

    console.log("----------------------------------------------------");
  }

  setTimeout(runInfiniteLoop, 0); // 🔁 Lặp lại nhanh không chặn chính
}

// 🚀 Bắt đầu vòng lặp
runInfiniteLoop();

// == Weapon Switching ==
function switchWeapon(newWeapon) {
  if (WeaponProfiles[newWeapon]) {
    const enhancedAimSystem = new AimLockUltimate(newWeapon);
    console.log(`🔫 Switched to ${newWeapon} - Profile loaded`);
    return enhancedAimSystem;
  } else {
    console.log(`❌ Unknown weapon: ${newWeapon}, using DEFAULT profile`);
    return new AimLockUltimate("DEFAULT");
  }
}

// == Dynamic Tuning by Distance/Mode ==
function detectOptimalSettingsForDistance(weapon, gameMode = "normal", distanceKey) {
  const baseProfile = WeaponProfiles[weapon] || WeaponProfiles["DEFAULT"];
  const modeMultipliers = {
    "normal": 9999.0,
    "ranked": 9999.0,
    "close_combat": 9999.0,
    "long_range": 9999.0
  };
  const distanceMultipliers = {
    close: 9999.0,
    medium: 9999.0,
    far: 9999.0,
    veryFar: 999.95
  };

  const modeMultiplier = modeMultipliers[gameMode] || 1.0;
  const distanceMultiplier = distanceMultipliers[distanceKey] || 1.0;
  const totalMultiplier = modeMultiplier * distanceMultiplier;

  return {
    ...baseProfile,
    dragSensitivity: baseProfile.dragSensitivity * totalMultiplier,
    aimLockStrength: baseProfile.aimLockStrength * totalMultiplier,
    accuracyBoost: baseProfile.accuracyBoost * totalMultiplier
  };
}

function getAllSettingsForWeapon(weapon) {
  const gameModes = ["normal", "ranked", "close_combat", "long_range"];
  const distanceKeys = ["close", "medium", "far", "veryFar"];
  const allSettings = {};

  gameModes.forEach(mode => {
    allSettings[mode] = {};
    distanceKeys.forEach(distance => {
      allSettings[mode][distance] = detectOptimalSettingsForDistance(weapon, mode, distance);
    });
  });

  return allSettings;
}
class BoneHeadTracker {
  constructor(bindposeData, boneHeadData) {
    this.bindposeMatrix = bindposeData ? Matrix4.fromBindpose?.(bindposeData) || null : null;

    if (boneHeadData) {
      this.boneHeadPosition = new Vector3(
        boneHeadData.position.x,
        boneHeadData.position.y,
        boneHeadData.position.z
      );
      this.boneHeadRotation = new Quaternion(
        boneHeadData.rotation.x,
        boneHeadData.rotation.y,
        boneHeadData.rotation.z,
        boneHeadData.rotation.w
      );
      this.boneHeadScale = new Vector3(
        boneHeadData.scale.x,
        boneHeadData.scale.y,
        boneHeadData.scale.z
      );
      this.boneHeadMatrix = new Matrix4().compose(
        this.boneHeadPosition,
        this.boneHeadRotation,
        this.boneHeadScale
      );
    } else {
      this.boneHeadMatrix = null;
    }
  }

  getHeadPositionFromBindpose(offset = new Vector3(0, 0, 0)) {
    if (!this.bindposeMatrix) return null;
    return offset.applyMatrix4(this.bindposeMatrix);
  }

  getHeadPositionFromBoneData(offset = new Vector3(0, 0, 0)) {
    if (!this.boneHeadMatrix) return null;

    const rotatedOffset = this.boneHeadRotation.multiplyVector3(offset);
    return this.boneHeadPosition.add(rotatedOffset);
  }
}

// ===== CrosshairLock Class =====
class CrosshairLock {
  constructor() {
    this.crosshair = new Vector3(400, 300, 0);
  }

  lockTo(target, threshold = 0.005) {
    const dist = this.crosshair.distanceTo(target);
    if (dist <= threshold) {
      return true;
    } else {
      this.crosshair = target;
      return false;
    }
  }

  getPosition() {
    return this.crosshair;
  }
}

// ===== TriggerShoot Class =====
class TriggerShoot {
  constructor() {
    this.isShooting = false;
  }

  tryShoot(isLocked) {
    if (isLocked && !this.isShooting) {
      this.isShooting = true;
      console.log("🔫 Trigger SHOOT!");
    }
    if (!isLocked && this.isShooting) {
      this.isShooting = false;
      console.log("✋ STOP shooting");
    }
  }
}

// ===== Các biến quản lý trạng thái smoothing, prediction, reset =====
let lockedTarget = null;
let targetHistory = [];
const smoothingFactor = 0.3;
const predictionFactor = 2;
const headLockRange = 100;
const resetRange = 120;

// Giả lập trạng thái màu tâm ngắm
let isCrosshairRed = true;

// Hàm tính vận tốc
function computeVelocity(current, last) {
  return new Vector3(
    current.x - last.x,
    current.y - last.y,
    current.z - last.z
  );
}

// Hàm dự đoán vị trí mục tiêu
function predictPosition(current, velocity, factor) {
  return new Vector3(
    current.x + velocity.x * factor,
    current.y + velocity.y * factor,
    current.z + velocity.z * factor
  );
}

// Hàm làm mượt delta (drag aim)
function smoothDelta(prevDelta, newDelta, factor) {
  return new Vector3(
    prevDelta.x + (newDelta.x - prevDelta.x) * factor,
    prevDelta.y + (newDelta.y - prevDelta.y) * factor,
    prevDelta.z + (newDelta.z - prevDelta.z) * factor
  );
}

// Demo data (có thể thay bằng data thật)
const bindposeData = {
  e00: -1.34559613e-13, e01: 8.881784e-14, e02: -1.0, e03: 0.487912,
  e10: -2.84512817e-6, e11: -1.0, e12: 8.881784e-14, e13: -2.842171e-14,
  e20: -1.0, e21: 2.84512817e-6, e22: -1.72951931e-13, e23: 0.0,
  e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
};

const demoBoneHeads = [
  {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale: { x: 0.99999994, y: 1.00000012, z: 1.0 }
  },
];

// Các vị trí head offset (có thể thêm)
const headOffsets = {
  forehead: new Vector3(0, 0.15, 0),
  eyes: new Vector3(0, 0.05, 0.05),
  top: new Vector3(0, 0.2, 0),
  chin: new Vector3(0, -0.1, 0),
};

const crosshairLock = new CrosshairLock();
const triggerShoot = new TriggerShoot();

// Hàm chọn target head gần nhất với crosshair, trong phạm vi lock
function chooseBestHeadTarget(crosshair) {
  let bestTarget = null;
  let minDistance = Infinity;

  for (const enemy of demoBoneHeads) {
    const tracker = new BoneHeadTracker(bindposeData, enemy);
    for (const key in headOffsets) {
      const offset = headOffsets[key];
      const rotatedOffset = tracker.boneHeadRotation.multiplyVector3(offset);
      const targetPos = tracker.boneHeadPosition.add(rotatedOffset);

      const dist = crosshair.distanceTo(targetPos);
      if (dist < minDistance && dist < headLockRange) {
        minDistance = dist;
        bestTarget = targetPos;
      }
    }
  }

  return bestTarget;
}

// ===== Vòng lặp chính =====
function mainLoop() {
  if (!isCrosshairRed) {
    lockedTarget = null;
    targetHistory = [];
    setTimeout(mainLoop, 16);
    return;
  }

  const crosshair = crosshairLock.getPosition();

  let bestTarget = chooseBestHeadTarget(crosshair);

  if (!bestTarget) {
    lockedTarget = null;
    targetHistory = [];
    setTimeout(mainLoop, 16);
    return;
  }

  let velocity = new Vector3(0, 0, 0);
  if (targetHistory.length > 0) {
    velocity = computeVelocity(bestTarget, targetHistory[targetHistory.length - 1]);
  }

  let predictedPos = predictPosition(bestTarget, velocity, predictionFactor);

  let aimDelta = new Vector3(
    predictedPos.x - crosshair.x,
    predictedPos.y - crosshair.y,
    0
  );

  if (lockedTarget && lockedTarget.aimDelta) {
    aimDelta = smoothDelta(lockedTarget.aimDelta, aimDelta, smoothingFactor);
  }

  const newCrosshair = crosshair.add(aimDelta);
  crosshairLock.crosshair = newCrosshair;

  if (newCrosshair.distanceTo(bestTarget) > resetRange) {
    lockedTarget = null;
    targetHistory = [];
    setTimeout(mainLoop, 16);
    return;
  }

  lockedTarget = {
    position: bestTarget,
    aimDelta: aimDelta,
    timestamp: Date.now()
  };

  targetHistory.push(bestTarget);
  if (targetHistory.length > 10) targetHistory.shift();

  if (aimDelta.distanceTo(new Vector3(0, 0, 0)) < 1) {
    triggerShoot.tryShoot(true);
  } else {
    triggerShoot.tryShoot(false);
  }

class AimbotConfig {
  constructor() {
    this.enabled = true;
    this.autoShoot = true;
    this.teamCheck = true;
    this.fov = 360;
    this.smoothing = 0.0; // Immediate tracking
    this.prediction = 0;
    this.maxDistance = 9999;
    this.headPriority = 1.0;
    this.preferClosest = true;
    this.maxTargetHistory = 5;
    this.humanization = false;
   
  }
}

// ===== AimbotEngine Gộp TargetManager + BoneHeadTracker =====
class AimbotEngine {
  constructor(config = new AimbotConfig()) {
    this.config = config;
    this.enemies = [];
    this.playerPosition = new Vector3();
    this.lastTarget = null;
    this.headPosition = new Vector3();
  }

  updateEnemies(enemyList) {
    this.enemies = enemyList.filter(e => e && e.health > 0 && e.boneHead);
  }

  updatePlayerPosition(pos) {
    this.playerPosition = new Vector3(pos.x, pos.y, pos.z);
  }

  getNearestEnemy() {
    let closest = null;
    let minDist = Infinity;
    for (const enemy of this.enemies) {
      const dist = this.playerPosition.distanceTo(enemy.position);
      if (dist < minDist && dist <= this.config.maxDistance) {
        closest = enemy;
        minDist = dist;
      }
    }
    return closest;
  }

  computeHeadPosition(bone) {
    if (!bone || !bone.position || !bone.rotation || !bone.scale) return new Vector3();
    const matrix = new Matrix4().compose(
      new Vector3(bone.position.x, bone.position.y, bone.position.z),
      new Quaternion(bone.rotation.x, bone.rotation.y, bone.rotation.z, bone.rotation.w),
      new Vector3(bone.scale.x, bone.scale.y, bone.scale.z)
    );
    const headOffset = new Vector3( -0.04089227, 0.00907892,0.02748467);
    return headOffset.applyMatrix4(matrix);
  }

  getAimPoint() {
    const target = this.getNearestEnemy();
    if (!target) return null;
    this.lastTarget = target;
    this.headPosition = this.computeHeadPosition(target.boneHead);
    return this.headPosition.clone();
  }
}

// ===== Khởi Tạo & Kiểm Tra =====
const config = new AimbotConfig();
const engine = new AimbotEngine(config);

// Giả lập enemy và player
const enemies = [
  {
    health: 100,
    position: new Vector3(10, 0, 20),
    boneHead: {
      position: {x: -0.0456970781, y: -0.004478302, z: -0.0200432576},
      rotation: {x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321},
      scale: {x: 0.99999994, y: 1.00000012, z:1.0}
    }
  }
];
const playerPos = { x: 0, y: 0, z: 0 };

// Cập nhật và lấy tọa độ
engine.updateEnemies(enemies);
engine.updatePlayerPosition(playerPos);
const aimPoint = engine.getAimPoint();

if (aimPoint) {
  console.log("🎯 Aim Head:", aimPoint.x.toFixed(3), aimPoint.y.toFixed(3), aimPoint.z.toFixed(3));
}

  console.log("🎯 Crosshair:", newCrosshair.toFixed());
  console.log("🎯 Target (predicted):", predictedPos.toFixed());
  console.log("🔒 Locked:", true);

  setTimeout(mainLoop, 8);
}

console.log("✅ Shadowrocket Headlock Aimbot Ready!");

// Khởi động vòng lặp
console.log("🚀 Khởi động hệ thống tracking + smoothing + prediction + trigger...");
mainLoop();
// ===== Race Config (BaseMale) =====
  const RaceConfig = {
    raceName: "BaseMale",
    headBone: "bone_Head",
    bodyBones: ["bone_Chest", "bone_Spine", "bone_Legs", "bone_Feet"],
    sensitivity: 9999.0,
    height: 2.0,
    radius: 0.25,
    mass: 50.0
  };

  // ===== Aim System =====
  const AimSystem = {
    getBonePos(enemy, bone) {
      if (!enemy || !enemy.bones) return new Vector3();
      return enemy.bones[bone] || new Vector3();
    },

    lockToHead(player, enemy) {
      let head = this.getBonePos(enemy, RaceConfig.headBone);
      let dir = head.subtract(player.position).normalize();
      player.crosshairDir = dir;
      console.log(`🎯 Auto Locked to ${RaceConfig.headBone}`);
    },

    applyRecoilFix(player) {
      let fix = 0.1;
      player.crosshairDir = player.crosshairDir.add(new Vector3(0, -fix, 0)).normalize();
      console.log(`🔧 Recoil fixed with strength ${fix}`);
    },

    adjustDrag(player, targetBone = "body") {
      let sens = 9999.0;
      if (targetBone === "head") sens *= 1.0;
      if (targetBone === "body") sens *= 9999.3;

      player.dragForce = sens;
      console.log(`⚡ Drag sensitivity adjusted (${targetBone}) → ${sens}`);
    }
  };

  // ===== Auto Head Lock =====
  class AutoHeadLock {
    constructor() {
      this.kalmanX = new KalmanFilter();
      this.kalmanY = new KalmanFilter();
      this.kalmanZ = new KalmanFilter();
    }
    getBone(enemy, boneName) {
      if (!enemy || !enemy.bones) return new Vector3();
      return enemy.bones[boneName] || new Vector3();
    }
    detectClosestBone(player, enemy) {
      let minDist = Infinity, closest = null;
      for (let bone of [RaceConfig.headBone, ...RaceConfig.bodyBones]) {
        let pos = this.getBone(enemy, bone);
        let dist = pos.subtract(player.position).magnitude();
        if (dist < minDist) { minDist = dist; closest = bone; }
      }
      return closest;
    }
    lockCrosshair(player, enemy) {
      if (!enemy) return;
      let targetBone = this.detectClosestBone(player, enemy);
      if (targetBone !== RaceConfig.headBone && Math.random() < 0.5) {
        targetBone = RaceConfig.headBone;
      }
      let bonePos = this.getBone(enemy, targetBone);
      let dir = bonePos.subtract(player.position).normalize();
      dir.x = this.kalmanX.filter(dir.x);
      dir.y = this.kalmanY.filter(dir.y);
      dir.z = this.kalmanZ.filter(dir.z);
      player.crosshairDir = dir;
      console.log(`🎯 Locked to ${targetBone} of ${RaceConfig.raceName}`);
    }
  }

  // ===== Free Fire Config =====
  const FreeFireConfig = {
  start: { locale: true, runsFromHomeScreen: 16 },
  screenResolution: { default: { width: 1840, height: 1080 }, current: { width: 2400, height: 1440 } },
  runsFromHomeScreen: config.runsFromHomeScreen,
  localname: "freefire",
  version: 67,
  complete: true,
  size: { width: 0, height: 0 },
  text: "",
  freefireResolution: { width: 1840, height: 1080 },
  paste: 0,
  hs: 1,
  aimbot: 1,

  dragToHead: { enabled: true, sensitivity: 9999.0, distanceScaling: true, snapSpeed: 9999.0, lockBone: "Head" },
  autoAimOnFire: {
  enabled: true,
  snapForce: 9999.0 // từ 0.0 → 1.0 (0.8 nghĩa là aim khá nhanh)
},
  autoHeadLock: { enabled: true, lockOnFire: true, holdWhileMoving: true, trackingSpeed: 9999.0, prediction: true, lockBone: "Head" },
  dragClamp: { enabled: true, maxOffset: 0.0, enforceSmooth: true },
  perfectHeadshot: { enabled: true, overrideSpread: true, hitBone: "Head", prediction: true, priority: "head" },
  hipSnapToHead: { enabled: true, instant: true, hipZone: "Hip", targetBone: "Head", snapForce: 9999.0 },
  stabilizer: { enabled: true, antiRecoil: true, antiShake: true, lockSmooth: true, correctionForce: 0.0, stabilizeSpeed: 9999.0 },
  forceHeadLock: { enabled: true, snapStrength: 9999.0 },  // ép thẳng tâm vào đầu
aimSensitivity: { 
    enabled: true, 
    base: 9999.0,         // độ nhạy mặc định
    closeRange: 9999.0,   // độ nhạy khi địch gần
    longRange: 9999.0,    // độ nhạy khi địch xa
    lockBoost: 9999.0,    // tăng nhạy khi đang lock
    distanceScale: true
  }
};
function onFireEvent(isFiring, enemyMoving) {
  if (
    FreeFireConfig.autoHeadLock.enabled &&
    FreeFireConfig.autoHeadLock.lockOnFire &&
    isFiring
  ) {
    console.log("🎯 Auto Head Lock triggered on bone:", FreeFireConfig.autoHeadLock.lockBone);

    if (enemyMoving && FreeFireConfig.autoHeadLock.holdWhileMoving) {
      console.log("🚀 Tracking moving enemy...");
    }
  }
} // <-- đóng ngoặc cho function
  // ===== Crosshair Lock Engine =====
  function lockCrosshairIfOnHead(playerPos, headPos, threshold = 0.000001) {
    let dx = playerPos.x - headPos.x, dy = playerPos.y - headPos.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    if (dist <= threshold) {
      playerPos.x = headPos.x; playerPos.y = headPos.y;
      console.log("🔒 Crosshair LOCKED on head:", playerPos);
    }
    return playerPos;
  }

  function clampCrosshairToHead(crosshair, headPos) {
    if (!FreeFireConfig.forceHeadLock.enabled) return crosshair;
    console.log("🔒 Crosshair clamped to head:", headPos);
    return { ...headPos };
  }

  // ===== Aim Sensitivity =====
  function getAimSensitivity(player, target) {
  if (!FreeFireConfig.aimSensitivity.enabled) return FreeFireConfig.aimSensitivity.base;

  let dx = target.x - player.x;
  let dy = target.y - player.y;
  let distance = Math.sqrt(dx*dx + dy*dy);

  let sens = FreeFireConfig.aimSensitivity.base;

  // theo khoảng cách
  if (FreeFireConfig.aimSensitivity.distanceScale) {
    if (distance < 0.00001) {
      sens = FreeFireConfig.aimSensitivity.closeRange;
    } else if (distance > 0.5) {
      sens = FreeFireConfig.aimSensitivity.longRange;
    }
  }

  // nếu đang lock thì tăng nhạy
  sens *= FreeFireConfig.aimSensitivity.lockBoost;

  console.log("⚙ Aim Sensitivity:", sens.toFixed(2), "distance:", distance.toFixed(3));
  return sens;
}


  // ===== Aim Engine =====
  function runAimEngine(playerPos, enemyBones) {
  let target = { ...enemyBones.head };

  // Auto Head Lock khi bắn
  onFireEvent(true, true);
playerPos = onFireEvent(true, true, playerPos, enemyBones);
  // Hip snap
  if (FreeFireConfig.hipSnapToHead.enabled) {
    let aimAtHip = Math.abs(playerPos.x - enemyBones.hip.x) < 0.05 &&
                   Math.abs(playerPos.y - enemyBones.hip.y) < 0.05;
    if (aimAtHip && FreeFireConfig.hipSnapToHead.instant) {
      target = { ...enemyBones.head };
    }
 if (FreeFireConfig.autoAimOnFire.enabled && isFiring) {
    let head = enemyBones.head;
    playerPos.x += (head.x - playerPos.x) * FreeFireConfig.autoAimOnFire.snapForce;
    playerPos.y += (head.y - playerPos.y) * FreeFireConfig.autoAimOnFire.snapForce;
    console.log("🔫 Auto AIM HEAD triggered:", playerPos);
  }

  return playerPos; // <-- return cuối cùng

   }

  // Perfect headshot
  if (FreeFireConfig.perfectHeadshot.enabled && FreeFireConfig.perfectHeadshot.prediction) {
    target.x += 0.00001;
    target.y += 0.00001;
  }

  // Stabilizer
  if (FreeFireConfig.stabilizer.enabled && FreeFireConfig.stabilizer.antiShake) {
    target.x = parseFloat(target.x.toFixed(4));
    target.y = parseFloat(target.y.toFixed(4));
  }

  // Force head lock
  target = clampCrosshairToHead(target, enemyBones.head);

  // Apply sensitivity
  let sens = getAimSensitivity(playerPos, target);
  playerPos.x += (target.x - playerPos.x) * 0.2 * sens;
  playerPos.y += (target.y - playerPos.y) * 0.2 * sens;

  // ✅ Lock chặt tâm ngắm
  playerPos = lockCrosshairIfOnHead(playerPos, enemyBones.head);

  return playerPos; // trả về playerPos mới
}
function selectClosestEnemy(player, enemies) {
  let best = null;
  let bestDist = Infinity;
  for (let e of enemies) {
    let dx = e.head.x - player.x;
    let dy = e.head.y - player.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < bestDist) {
      bestDist = dist;
      best = e;
    }
  }
  return best;
} 
    // ===== Aimlock Loop (async) =====
  async function startAimlock() {
    let player = { x: 0, y: 0, position: new Vector3(0,0,0), crosshairDir: new Vector3(), dragForce: 9999.0 };

    let enemies = [
      { head: { x: -0.0456970781, y: -0.004478302 }, hip: { x: -0.05334, y: -0.003515 } },
      { head: { x: -0.0456970781, y: -0.004478302 }, hip: { x: -0.05334, y: -0.003515 } }
    ];

    console.log("🚀 AIMLOCK running...");
    while (true) {
      let enemy = selectClosestEnemy(player, enemies);
      if (enemy) player = runAimEngine(player, enemy);
      await new Promise(r => setTimeout(r, 50));
    }
  }

  // Xuất public API
  return {
    Vector3,
    KalmanFilter,
    AutoHeadLock,
    RaceConfig,
    FreeFireConfig,
    AimSystem,
    runAimEngine,
    selectClosestEnemy,
    startAimlock
  };

})();

FreeFireAutoHeadLockModule.startAimlock();
    const AIMBOT_SYSTEM = (() => {
    
    // ===============================
    // AIMBOT MOBILE - CORE STRUCTURE
    // ===============================

    class Vector3 {
        constructor(x=0, y=0, z=0) {
            this.x = x; this.y = y; this.z = z;
        }
        subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
        add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
        length() { return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); }
        normalize() {
            const l = this.length() || 1;
            return new Vector3(this.x/l, this.y/l, this.z/l);
        }
    }

    class TargetDetector {
        constructor() {
            this.targets = [];
        }

        detectEnemies(frameData) {
            this.targets = frameData.enemies || [];
            return this.targets;
        }

        getClosestTarget(playerPos) {
            let bestTarget = null;
            let bestDist = Infinity;
            for (let t of this.targets) {
                const dist = playerPos.subtract(new Vector3(t.x, t.y, t.z)).length();
                if (dist < bestDist) {
                    bestDist = dist;
                    bestTarget = t;
                }
            }
            return bestTarget;
        }
    }

    class PositionCalculator {
    static calculateAimPoint(player, target) {
        if (!target) return null;

        // lấy boneOffset từ target (nếu có), fallback về 0
        const boneOffset = target.boneOffset 
            ? new Vector3(target.boneOffset.x, target.boneOffset.y, target.boneOffset.z) 
            : new Vector3(0, 2.0, 0);

        return new Vector3(
            target.x + boneOffset.x,
            target.y + boneOffset.y,
            target.z + boneOffset.z
        );
    }
}

    class ScreenController {
        static aimAt(aimPoint, screenCenter, sensitivity=1.0) {
            if (!aimPoint) return null;
            const dx = (aimPoint.x - screenCenter.x) * sensitivity;
            const dy = (aimPoint.y - screenCenter.y) * sensitivity;
            return { action: "drag", moveX: dx, moveY: dy };
        }
    }

    const CONFIG = {
        enabled: true,
        trackingSpeed: 9999.0,
        predictionFactor: 0.0,
        sensitivity: 9999.0,
        maxDistance: 9999.0,
        stickiness: "strong"
    };

    class Engine {
        constructor() {
            this.detector = new TargetDetector();
            this.playerPos = new Vector3(0,0,0);
            this.screenCenter = new Vector3(0.5, 0.5, 0);
        }

        update(frameData) {
            if (!CONFIG.enabled) return null;
            const enemies = this.detector.detectEnemies(frameData);
            const target = this.detector.getClosestTarget(this.playerPos);
            const aimPoint = PositionCalculator.calculateAimPoint(this.playerPos, target);
            return ScreenController.aimAt(aimPoint, this.screenCenter, CONFIG.sensitivity);
        }
    }

    return {
        Vector3,
        TargetDetector,
        PositionCalculator,
        ScreenController,
        CONFIG,
        Engine
    };
})();

// ===============================
// GIẢ LẬP VÒNG LẶP
// ===============================
const engine = new AIMBOT_SYSTEM.Engine();
const frameData = {
    enemies: [
        { 
            x: 0, y: 2.0, z: 0,
            boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 } // offset head
        },
        { 
            x: 0, y: 2.0, z: 0,
            boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 } // offset head mặc định
        }
    ]
};
const action = engine.update(frameData);
console.log("[Aimbot Output]", action);
    // ==========================
// AIMLOCK SYSTEM (MOBILE)
// ==========================

const AimLockSystem = {
  // ==========================
  // 0. Config
  // ==========================
  config: {
    sensitivity: 9999.0,         // Độ nhạy kéo tâm
    lockSpeed: 2.0,              // Tốc độ hút tâm (0 = chậm, 1 = tức thì)
    prediction: true,            // Bật dự đoán chuyển động
    tracking: true,              // Theo dõi liên tục
    fov: 360,                    // Góc nhìn để aim
    autoFire: false,             // Tự động bắn khi lock trúng
    priority: "nearest",         // nearest | lowestHP | first
    boneOffset: { x: 0, y: -0.0004, z: 0 } // Dịch lên đầu (head clamp)
  },

  // ==========================
  // 1. Phát hiện mục tiêu
  // ==========================
  detectTarget(enemies, playerPos) {
    return enemies
      .filter(e => e.isVisible && e.health > 0)
      .sort((a, b) => {
        if (this.config.priority === "nearest") {
          return this.distance(playerPos, a.position) - this.distance(playerPos, b.position)
        } else if (this.config.priority === "lowestHP") {
          return a.health - b.health
        } else {
          return 0
        }
      })
  },

  // ==========================
  // 2. Khóa mục tiêu (Lock-On)
  // ==========================
  lockTarget(target) {
    if (!target) return
    let pos = this.applyHeadClamp(target.position)
    this.aimlockScreenTap(pos)
  },

  // ==========================
  // 3. Tracking (Theo dõi liên tục)
  // ==========================
  updateTargetPosition(target) {
    if (!target) return
    let predicted = this.config.prediction ? this.predictPosition(target) : target.position
    let clamped = this.applyHeadClamp(predicted)
    this.aimlockScreenTap(clamped)
  },

  // ==========================
  // 4. Prediction (dự đoán di chuyển)
  // ==========================
  predictPosition(target) {
    let velocity = target.velocity || {x:0,y:0,z:0}
    return {
      x: target.position.x + velocity.x * 0.1,
      y: target.position.y + velocity.y * 0.1,
      z: target.position.z + velocity.z * 0.1
    }
  },

  // ==========================
  // 5. Clamp vào Head Bone
  // ==========================
  applyHeadClamp(pos) {
    return {
      x: pos.x + this.config.boneOffset.x,
      y: pos.y + this.config.boneOffset.y,
      z: pos.z + this.config.boneOffset.z
    }
  },

  // ==========================
  // 6. Điều khiển chạm màn hình
  // ==========================
  aimlockScreenTap(screenPos) {
    console.log("Crosshair moving to:", screenPos)
  },

  // ==========================
  // 7. Vòng lặp chính Aimlock
  // ==========================
  aimlockLoop(enemies, player) {
    let targets = this.detectTarget(enemies, player.position)
    if (targets.length > 0) {
      let mainTarget = targets[0]

      // Khóa cứng vào head
      this.lockTarget(mainTarget)

      // Theo dõi liên tục
      if (this.config.tracking) {
        this.updateTargetPosition(mainTarget)
      }

      // Auto fire nếu bật
      if (this.config.autoFire) {
        console.log("Auto firing at target!")
      }
    }
  },

  // ==========================
  // Helper: Tính khoảng cách
  // ==========================
  distance(a, b) {
    return Math.sqrt(
      (a.x - b.x) ** 2 +
      (a.y - b.y) ** 2 +
      (a.z - b.z) ** 2
    )
  }
}


// =======================
// AIMNECK CONFIG MODULE
// =======================
const AimNeckConfig = {
  name: "AimNeckSystem",
  enabled: true,

  config: {
    sensitivity: 9999.0,         // Độ nhạy di chuyển tâm
    lockSpeed: 9999.0,             // Tốc độ hút tâm (1 = tức thì)
    prediction: true,            // Bật dự đoán vị trí cổ
    tracking: true,              // Theo dõi liên tục
    fov: 360,                    // Góc quét tìm mục tiêu
    autoFire: false,             // Bắn tự động khi lock
    aimBone: "bone_Neck",        // Vùng cổ mặc định
    headAssist: true,            // Nếu kéo lên trên, auto hút vào đầu
    screenTapEnabled: true,      // Điều khiển chạm màn hình
    clamp: { minY: 0, maxY: 0 }, // Giới hạn lock (không vượt quá đầu)

    // Thêm offset để dễ chỉnh từ cổ sang đầu
    boneOffset: { x: 0, y: 0.22, z: 0 } 
  },

  // 1. Phát hiện vị trí cổ
  detectNeckTarget(enemies) {
    return enemies.filter(e => e.isVisible && e.health > 0)
                  .map(e => ({ 
                     enemy: e, 
                     neckPos: this.getBonePosition(e, this.config.aimBone) 
                  }))
  },

  // Giả lập lấy vị trí bone cổ từ nhân vật
  getBonePosition(enemy, bone) {
    let base = enemy.bones && enemy.bones[bone] ? enemy.bones[bone] : enemy.position
    // Áp dụng offset để dễ kéo sang đầu
    return {
      x: base.x + this.config.boneOffset.x,
      y: base.y + this.config.boneOffset.y,
      z: base.z + this.config.boneOffset.z
    }
  },

  // 2. Prediction: dự đoán di chuyển cổ
  predictNeckPosition(target) {
    let velocity = target.enemy.velocity || {x:0,y:0,z:0}
    return {
      x: target.neckPos.x + velocity.x * 0.1,
      y: target.neckPos.y + velocity.y * 0.1,
      z: target.neckPos.z + velocity.z * 0.1
    }
  },

  // 3. Tính toán hướng để nhắm cổ
  calculateAimDirection(playerPos, targetPos) {
    return {
      x: targetPos.x - playerPos.x,
      y: targetPos.y - playerPos.y,
      z: targetPos.z - playerPos.z
    }
  },

  // 4. Điều khiển drag/tap màn hình
  screenTapTo(targetPos) {
    if (this.config.screenTapEnabled) {
      console.log("Screen tap/drag tới:", targetPos)
    }
  },

  // Áp dụng aimlock (dịch chuyển crosshair)
  applyAimLock(direction) {
    console.log("AimLock hướng tới:", direction)
  },

  // 5. Aimneck Loop
  run(player, enemies) {
    if (!this.enabled) return
    let targets = this.detectNeckTarget(enemies)
    if (targets.length === 0) return

    let target = targets[0]
    let lockPos = this.config.prediction ? this.predictNeckPosition(target) : target.neckPos
    
    let dir = this.calculateAimDirection(player.position, lockPos)

    // Giới hạn: không vượt quá đầu
    if (this.config.headAssist) {
      if (dir.y > this.config.clamp.maxY) dir.y = this.config.clamp.maxY
      if (dir.y < this.config.clamp.minY) dir.y = this.config.clamp.minY
    }

    this.applyAimLock(dir)
    this.screenTapTo(lockPos)
  }
}
   
    const FeatherDragHeadLock = {
    enabled: true,
    headBone: "bone_Head",

    sensitivityBoost: 99999.0,   // drag siêu nhẹ (càng cao càng nhạy)
    smoothFactor: 0.0,      // tốc độ hút về đầu (0.1 = chậm, 0.3 = nhanh)
    snapThreshold: 9999.0,     // khoảng cách auto hút hẳn vào đầu
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        // vector chênh lệch
        let dx = headPos.x - aimPos.x;
        let dy = headPos.y - aimPos.y;
        let dz = headPos.z - aimPos.z;
        let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

        // Nếu crosshair lọt vào vùng snap → lock thẳng vào đầu
        if (dist < this.snapThreshold) {
            player.crosshair.position = { ...headPos };
            player.crosshair.lockedBone = this.headBone;
            console.log(`[FeatherDragHeadLock] 🎯 LOCK thẳng vào ${this.headBone}`);
            return;
        }

        // Luôn kéo crosshair nhẹ nhàng hướng về đầu
        player.crosshair.position = {
            x: aimPos.x + dx * this.smoothFactor * this.sensitivityBoost,
            y: aimPos.y + dy * this.smoothFactor * this.sensitivityBoost,
            z: aimPos.z + dz * this.smoothFactor * this.sensitivityBoost
        };

        console.log(`[FeatherDragHeadLock] ✨ Auto hút về ${this.headBone}, dist=${dist.toFixed(3)}`);
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && FeatherDragHeadLock.enabled) {
        FeatherDragHeadLock.apply(localPlayer, HeadLockAim.currentTarget);
    }
});
    const NoOverHeadDrag = {
    enabled: true,
    headBone: "bone_Head",
    clampYOffset: 0.0,   // cho phép cao hơn đầu bao nhiêu (0 = tuyệt đối không vượt)
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        // Nếu y của crosshair cao hơn đầu
        if (aimPos.y > headPos.y + this.clampYOffset) {
            player.crosshair.position = {
                x: aimPos.x,                // giữ X (ngang)
                y: headPos.y + this.clampYOffset, // ghim trần Y tại đầu
                z: aimPos.z                 // giữ Z (sâu)
            };

            console.log(`[NoOverHeadDrag] ⛔ Giới hạn drag, crosshair không vượt quá ${this.headBone}`);
        }
    }
};

// Vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && NoOverHeadDrag.enabled) {
        NoOverHeadDrag.apply(localPlayer, HeadLockAim.currentTarget);
    }
});
    const DragHeadLockStabilizer = {
    enabled: true,
    headBone: "bone_Head",
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    lockZone: {
        toleranceX: 0.0,   // độ lệch ngang cho phép khi drag
        toleranceY: 0.0    // độ lệch dọc cho phép khi drag
    },

    stabilize: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        let dx = Math.abs(aimPos.x - headPos.x);
        let dy = Math.abs(aimPos.y - headPos.y);

        // Debug log
        console.log(`[DragHeadLockStabilizer] dx=${dx.toFixed(4)}, dy=${dy.toFixed(4)}`);

        // Nếu crosshair đang drag trong vùng "hút đầu"
        if (dx < this.lockZone.toleranceX && dy < this.lockZone.toleranceY) {
            // Ghìm tâm ngay tại vị trí đầu
            player.crosshair.position = {
                x: headPos.x,
                y: headPos.y,
                z: headPos.z
            };

            player.crosshair.lockedBone = this.headBone;
            console.log(`[DragHeadLockStabilizer] ✅ GHÌM TẠI ĐẦU (${this.headBone})`);
        }
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && DragHeadLockStabilizer.enabled) {
        DragHeadLockStabilizer.stabilize(localPlayer, HeadLockAim.currentTarget);
    }
});
    const SmartBoneAutoHeadLock = {
    enabled: true,
    mode: "aggressive",   // "normal" | "aggressive"
    triggerBones: [
        "bone_LeftClav",
        "bone_RightClav",
        "bone_Neck",
        "bone_Hips"
    ],
    headBone: "bone_Head",
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    // --- Config mặc định (Normal) ---
    lockTolerance: 0.02,       // vùng hút cơ bản
    maxYOffset: 0.0,         // không lố đầu
    maxRotationDiff: 0.001,     // giới hạn sai lệch góc quay
    maxOffsetDiff: 0.0001,       // giới hạn sai lệch offset

    // --- Config Aggressive Mode ---
    aggressive: {
        lockTolerance: 0.0001,   // rộng hơn, dễ hút hơn
        maxYOffset: 0.0,      // cho phép bù y cao hơn
        maxRotationDiff: 0.001,  // cho phép sai lệch nhiều hơn
        maxOffsetDiff: 0.001     // offset xa vẫn hút
    },

    checkAndLock: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let cfg = (this.mode === "aggressive") ? this.aggressive : this;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);
        let headData = enemy.getBoneData(this.headBone); // {position, rotation}

        for (let bone of this.triggerBones) {
            let bonePos = enemy.getBonePosition(bone);
            let boneData = enemy.getBoneData(bone);

            let offsetDiff = Math.sqrt(
                Math.pow(bonePos.x - headPos.x, 2) +
                Math.pow(bonePos.y - headPos.y, 2) +
                Math.pow(bonePos.z - headPos.z, 2)
            );

            let dot =
                headData.rotation.x * boneData.rotation.x +
                headData.rotation.y * boneData.rotation.y +
                headData.rotation.z * boneData.rotation.z +
                headData.rotation.w * boneData.rotation.w;
            let rotationDiff = 1 - Math.abs(dot);

            let dx = Math.abs(aimPos.x - bonePos.x);
            let dy = Math.abs(aimPos.y - bonePos.y);

            // Debug
            console.log(`[SmartBoneAutoHeadLock][${this.mode}] bone=${bone}, dx=${dx.toFixed(4)}, dy=${dy.toFixed(4)}, offsetDiff=${offsetDiff.toFixed(4)}, rotationDiff=${rotationDiff.toFixed(4)}`);

            if (
                dx < cfg.lockTolerance &&
                dy < cfg.lockTolerance &&
                offsetDiff < cfg.maxOffsetDiff &&
                rotationDiff < cfg.maxRotationDiff
            ) {
                let clampedY = Math.min(headPos.y, aimPos.y + cfg.maxYOffset);

                player.crosshair.position = {
                    x: headPos.x,
                    y: clampedY,
                    z: headPos.z
                };

                player.crosshair.lockedBone = this.headBone;
                console.log(`[SmartBoneAutoHeadLock][${this.mode}] ✅ LOCKED to ${this.headBone} (triggered by ${bone})`);
                return;
            }
        }
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && SmartBoneAutoHeadLock.enabled) {
        SmartBoneAutoHeadLock.checkAndLock(localPlayer, HeadLockAim.currentTarget);
    }
});
    const HeadLockClamp = {
    enabled: true,
    targetBone: "Head",
    maxYOffset: 0.0,   // Giới hạn lệch lên trên đầu (mét) - càng nhỏ càng khít
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    clampAim: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let headPos = enemy.getBonePosition(this.targetBone);
        let aimPos = player.crosshair.position;

        // Nếu crosshair vượt quá đỉnh đầu (trên trục Y)
        if (aimPos.y > headPos.y + this.maxYOffset) {
            aimPos.y = headPos.y + this.maxYOffset;
        }

        // Cập nhật lại crosshair
        player.crosshair.position = aimPos;
    }
};

// Gắn vào loop game
Game.on("update", () => {
    if (localPlayer.isDragging && HeadLockAim.currentTarget) {
        HeadLockClamp.clampAim(localPlayer, HeadLockAim.currentTarget);
    }
});
    const HeadLockAim = {
    enabled: true,
    targetBone: "Head",
    lockSpeed: 1.0, // 1.0 = khóa tức thì, 0.5 = mượt hơn
    fovLimit: 360,    // Chỉ khóa nếu mục tiêu trong FOV này (độ)
    currentTarget: null,

    update: function(player, enemies) {
        if (!this.enabled) return;

        if (player.isFiring) {
            // Nếu chưa có target hoặc target chết → tìm mới
            if (!this.currentTarget || !this.currentTarget.isAlive) {
                this.currentTarget = this.findTarget(player, enemies);
            }
            if (this.currentTarget) {
                this.lockToHead(player, this.currentTarget);
            }
        } else {
            // Ngừng bắn → bỏ lock
            this.currentTarget = null;
        }
    },

    findTarget: function(player, enemies) {
        let bestEnemy = null;
        let minAngle = this.fovLimit;

        let camDir = player.camera.direction;
        let camPos = player.camera.position;

        for (let e of enemies) {
            if (!e.isAlive) continue;

            let headPos = e.getBonePosition(this.targetBone);
            let dir = headPos.subtract(camPos).normalize();
            let angle = camDir.angleTo(dir) * (180 / Math.PI);

            if (angle < minAngle) {
                minAngle = angle;
                bestEnemy = e;
            }
        }
        return bestEnemy;
    },

    lockToHead: function(player, enemy) {
        let headPos = enemy.getBonePosition(this.targetBone);
        let aimDir = headPos.subtract(player.camera.position).normalize();

        // Lerp để có thể mượt hoặc khóa cứng tùy lockSpeed
        player.camera.direction = Vector3.lerp(
            player.camera.direction,
            aimDir,
            this.lockSpeed
        );
    }
};

// Gắn vào game loop
Game.on("update", () => {
    HeadLockAim.update(localPlayer, visibleEnemies);
});
    const HipAssistAim = {
    enabled: true,
    hipBoneName: "Hips",
    headBoneName: "Head",
    hipOffset: { x: -0.05334, y: -0.00351, z: -0.00076 }, // Offset hips
    hipSensitivityBoost: 20.5, // Độ nhạy khi ở vùng hông
    normalSensitivity: 6.0,
    hipDistanceThreshold: 0.001, // Khoảng cách crosshair-hips để kích hoạt

    update: function(player, enemies) {
        if (!this.enabled || enemies.length === 0) return;

        let target = this.getClosestEnemy(player, enemies);
        if (!target) return;

        // Lấy vị trí hips và head
        let hipPos = target.getBonePosition(this.hipBoneName);
        hipPos.x += this.hipOffset.x;
        hipPos.y += this.hipOffset.y;
        hipPos.z += this.hipOffset.z;

        let headPos = target.getBonePosition(this.headBoneName);

        // Khoảng cách crosshair tới hips
        let distToHips = Vector3.distance(player.crosshair.worldPos, hipPos);

        // Nếu gần hips → tăng nhạy để kéo nhanh lên head
        if (distToHips <= this.hipDistanceThreshold) {
            player.aimSensitivity = this.hipSensitivityBoost;
        } else {
            player.aimSensitivity = this.normalSensitivity;
        }

        // Nếu đang kéo → auto hướng về head
        if (player.isDragging) {
            let aimDir = headPos.subtract(player.camera.position).normalize();
            player.camera.direction = Vector3.lerp(
                player.camera.direction,
                aimDir,
                player.aimSensitivity * Game.deltaTime
            );
        }
    },

    getClosestEnemy: function(player, enemies) {
        let camDir = player.camera.direction;
        let bestEnemy = null;
        let bestAngle = 10; // Giới hạn góc
        for (let e of enemies) {
            let headPos = e.getBonePosition(this.headBoneName);
            let dir = headPos.subtract(player.camera.position).normalize();
            let angle = camDir.angleTo(dir) * (180 / Math.PI);
            if (angle < bestAngle) {
                bestAngle = angle;
                bestEnemy = e;
            }
        }
        return bestEnemy;
    }
};

// Chạy vòng lặp
Game.on("update", () => {
    HipAssistAim.update(localPlayer, visibleEnemies);
});
    const FullAutoAimDragLock = {
    enabled: true,
    fov: 180, // Góc tìm mục tiêu
    dragSpeed: 5.5, // Tốc độ kéo về đầu
    hardLockDistance: 0.0001, // Khoảng cách khóa hẳn (càng nhỏ càng chính xác)
    boneName: "Head",
    boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },

    update: function(player, enemies) {
        if (!this.enabled || enemies.length === 0) return;

        // Tìm mục tiêu gần nhất trong FOV
        let target = this.getClosestTargetInFOV(player, enemies);
        if (!target) return;

        // Lấy vị trí bone head + offset
        let headPos = target.getBonePosition(this.boneName);
        headPos.x += this.boneOffset.x;
        headPos.y += this.boneOffset.y;
        headPos.z += this.boneOffset.z;

        // Tính vector aim
        let aimVec = headPos.subtract(player.camera.position);
        let dist = aimVec.magnitude();

        if (dist <= this.hardLockDistance) {
            // Hard lock ngay lập tức
            player.camera.lookAt(headPos, 0.0);
        } else {
            // Auto drag về phía head
            let dragVec = aimVec.normalize().scale(this.dragSpeed * Game.deltaTime);
            player.camera.direction = player.camera.direction.add(dragVec).normalize();
        }
    },

    getClosestTargetInFOV: function(player, enemies) {
        let camDir = player.camera.direction;
        let bestTarget = null;
        let bestAngle = this.fov;

        enemies.forEach(enemy => {
            let headPos = enemy.getBonePosition(this.boneName);
            let dirToEnemy = headPos.subtract(player.camera.position).normalize();
            let angle = camDir.angleTo(dirToEnemy) * (180 / Math.PI);
            if (angle < bestAngle) {
                bestAngle = angle;
                bestTarget = enemy;
            }
        });
        return bestTarget;
    }
};

// Chạy vòng lặp auto aim
Game.on("update", () => {
    FullAutoAimDragLock.update(localPlayer, visibleEnemies);
});
    const AimSnapToHead = {
    enabled: true,
    snapOnDrag: true,
    fovLock: 360, // 360° => bất kỳ hướng nào
    lockSmooth: 0.0, // 0 = khóa ngay lập tức

    boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },

    update: function(player, enemy, isDragging) {
        if (!this.enabled || !enemy) return;

        if (this.snapOnDrag && isDragging) {
            // Lấy vị trí bone head của enemy
            const headPos = enemy.getBonePosition("Head");

            // Cộng offset để chỉnh chuẩn vào giữa đầu
            headPos.x += this.boneOffset.x;
            headPos.y += this.boneOffset.y;
            headPos.z += this.boneOffset.z;

            // Tính hướng từ tâm ngắm tới đầu
            const aimDirection = headPos.subtract(player.camera.position);

            // Xoay camera ngay lập tức về hướng head
            player.camera.lookAt(headPos, this.lockSmooth);
        }
    }
};

// Vòng lặp update trong game
Game.on("update", () => {
    AimSnapToHead.update(localPlayer, currentTarget, Input.isDragging());
});
    // Mặc định: đi thẳng, không proxy
    return "DIRECT";
}
