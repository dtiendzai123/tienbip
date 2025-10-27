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
// ==/UserScript==
const CONFIG = {
  lockHoldTime: 9999,   // ms giữ lock khi đã ở đầu
  AUTO_SWITCH: true,
  DEBUG: true,
  DEFAULT_AIMFOV: 999,
  AIM_SMOOTH: 0,
  NO_RECOIL: true,
  AUTO_HEADSHOT: true,
  LOCK_BONE: "head",

  PREDICTION: { enabled: true, leadFactor: 1.0 },

  HYPER_SENSITY: {
    enabled: true,
    chestRadius: 0.001,
    sensitivityMultiplier: 9999.0
  },

  AUTO_FIRE: {
    enabled: true,
    minLockConfidence: 0.0
  },

  
  sensitivity: 9999.0,
  autoHeadLock: true,
  aimLockHead: true,
  headLockFov: 520,
  aimFov: 380,
  predictiveMultiplier: 0.001,
  superHeadLock: 9999.0,
  aimSmoothnessNear: 0.00001,
  aimSmoothnessFar: 0.00001,
  triggerFireChance: 1.0,
  quantumAiming: true,
  neuralPrediction: true,
  adaptiveAI: true,
  multiThreaded: true,
  ghostMode: true,
  perfectHumanization: true,
  realTimeML: true,
  contextualAwareness: true,
  wallPenetration: true,
  magicBullet: true,
  magicTrick: true, // New MagicTrick feature
  stealthMode: true,
  behaviorCloning: true,
  naturalJitter: { min: 0.0, max: 0.0 },
  humanReactionTime: { min: 0, max: 0 },
  organicMovement: true,
  biometricMimicry: true,
  mousePersonality: 'ultra_adaptive',
  antiPatternDetection: true,
  hyperOptimization: true,
  quantumCalculations: true,
  memoryOptimization: true,
  realTimeAdaptation: true,
  cacheOptimization: true,

  smoothingFrames: 5,
  frameDelay: 5,
  noiseLevel: 0.2,
  recoilCancelFactor: 1.0,
  fpsLogInterval: 1000,
  trackHistoryLimit: 50,
  enableGhostOverlay: true,
  enableOneShotAI: true,
  adaptiveSensitivity: true,
  stabilizationWindow: 7,

  wasmAcceleration: true,
  threadPoolSize: 12,
  maxCalculationsPerFrame: 30,
  rapidHeadSwitch: true,
  dynamicHeadPriority: true,
  ultraSmoothTransition: true,
  contextualHeadLock: true,

  // MagicTrick Configuration
  magicTrickConfig: {
    enabled: true,
    headAttraction: 9999.0, // Strength of head attraction
    adaptiveMagic: true, // Adjust based on game context
    magicSwitchSpeed: 0.0001, // Speed of switching to new head target
    magicConfidence: 0.0, // Confidence threshold for magic trick activation
    visualFeedback: true, // Enable visual feedback for magic trick
    lockPersistence: 9999.0 // Time to maintain head lock (seconds)
  },

  // Master Weapon Profiles
  tracking: {
    default: { 
      speed: 9999.0, pullRate: 9999.0, headBias: 9999.0, neckBias: 10.0, chestBias: 1.0, 
      closeBoost: 9999.0, recoilPattern: [0, 0], burstControl: 1.0, rangeMod: 9999.0, 
      recoilRecovery: 9999.0, penetration: 0.65, criticalZone: 15.0, stability: 0.98, 
      neuralWeight: 9999.0
    },
    mp40: { 
     speed: 9999.0, pullRate: 9999.0, headBias: 9999.0, neckBias: 10.0, chestBias: 1.0, 
      closeBoost: 9999.0, recoilPattern: [0, 0], burstControl: 1.0, rangeMod: 9999.0, 
      recoilRecovery: 9999.0, penetration: 0.65, criticalZone: 15.0, stability: 0.98, 
      neuralWeight: 9999.0
    },
    thompson: { 
         speed: 9999.0, pullRate: 9999.0, headBias: 9999.0, neckBias: 10.0, chestBias: 1.0, 
      closeBoost: 9999.0, recoilPattern: [0, 0], burstControl: 1.0, rangeMod: 9999.0, 
      recoilRecovery: 9999.0, penetration: 0.65, criticalZone: 15.0, stability: 0.98, 
      neuralWeight: 9999.0
    },
    ump: { 
         speed: 9999.0, pullRate: 9999.0, headBias: 9999.0, neckBias: 10.0, chestBias: 1.0, 
      closeBoost: 9999.0, recoilPattern: [0, 0], burstControl: 1.0, rangeMod: 9999.0, 
      recoilRecovery: 9999.0, penetration: 0.65, criticalZone: 15.0, stability: 0.98, 
      neuralWeight: 9999.0
    },
        m1887: { 
        speed: 9999.0, pullRate: 9999.0, headBias: 9999.0, neckBias: 10.0, chestBias: 1.0, 
      closeBoost: 9999.0, recoilPattern: [0, 0], burstControl: 1.0, rangeMod: 9999.0, 
      recoilRecovery: 9999.0, penetration: 0.65, criticalZone: 15.0, stability: 0.98, 
      neuralWeight: 9999.0
    }
  },

  // Advanced Sensitivity Matrix
  sensiActivity: {
    default: 9999.0,
    mp40: 9999.0,
    thompson: 9999.0,
    ump: 9999.0,
    m1887: 9999.0
  },

  // Enhanced Target Priority System
  targetPriority: {
    head: 230,
    neck: 130,
    chest: 90,
    limbs: 60,
    distance: 1.6,
    health: 1.2,
    threat: 1.5,
    movement: 1.3,
    cover: 0.5,
    teamPriority: 2.0,
    visibility: 1.7,
    exposureTime: 1.4
  },

  // AI Learning System
  aiLearning: {
    enabled: true,
    learningRate: 0.25,
    memoryDepth: 120,
    adaptationSpeed: 0.18,
    patternRecognition: true,
    behaviorAnalysis: true,
    performanceFeedback: true,
    maxTrainingSamples: 2500
  },

  // Quantum Physics Engine
  quantumPhysics: {
    enabled: true,
    uncertaintyPrinciple: 0.0006,
    quantumTunneling: true,
    superposition: true,
    entanglement: true,
    quantumCurveFluctuation: 0.0004
  },

  // Magic Bullet Settings
  magicBulletConfig: {
    enabled: true,
    curve: 3.5,
    prediction: 1.5,
    wallBypass: true,
    trajectoryOptimization: true,
    dynamicCurveAdjustment: true,
    adaptiveTrajectory: {
      smg: { curve: 3.0, prediction: 1.3 },
      sniper: { curve: 4.5, prediction: 1.7 }
    },
    magicBurstMode: { enabled: true, burstBoost: 1.2, maxBurst: 5 }
  },

  // Trigger Bot Settings
  triggerBot: {
    enabled: true,
    delay: { min: 0, max: 0 },
    burstMode: true,
    smartTrigger: true,
    safeMode: true,
    adaptiveBurst: true
  }
};
function log(...args){
  if(CONFIG.DEBUG) console.log("[FF-PATCH]", ...args);
}


// === INIT BODY HANDLER ===
let body = "";
let json = null;

// Ưu tiên lấy body từ request nếu có
if (typeof $request !== 'undefined' && $request.body) {
    body = $request.body;
} 
// Nếu không có request body thì thử lấy response body
else if (typeof $response !== 'undefined' && $response.body) {
    body = $response.body;
}

// Nếu body là object -> stringify
if (typeof body === 'object') {
    try { body = JSON.stringify(body); } catch (e) { body = ""; }
}

// Thử parse JSON
try {
    json = JSON.parse(body);
} catch (e) {
    json = null; // Nếu không phải JSON thì để null, các patch phía dưới sẽ xử lý raw body
}

// === SAFETY DEFAULTS (avoid ReferenceError) ===
// Khởi tạo vùng headshot nếu chưa có
if (typeof headshotPriorityZone === 'undefined') {
    var headshotPriorityZone = { xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
}
// Nếu không có config khác, ánh xạ config toàn cục vào CONFIG
if (typeof config === 'undefined') {
    var config = typeof CONFIG !== 'undefined' ? CONFIG : {};
}
// Khởi tạo gameState mặc định
if (typeof gameState === 'undefined') {
    var gameState = {
        performanceProfile: { fps: 60, latency: 0, magicTrickConfidence: 0 },
        recoilState: { shotCount: 0, lastShot: 0, weapon: null },
        magicTrickState: { magicConfidence: 0, lastHeadLock: 0, activeTarget: null },
        targetMemory: new Map(),
        aiMemory: new Map(),
        neuralNetwork: { weights: new Map(), activations: [] },
        triggerState: { lastTrigger: 0, burstCount: 0 },
        lastAim: { x: 0, y: 0 }
    };
}
// Một số hàm tiện ích nếu chưa tồn tại
if (typeof getCrosshairPosition === 'undefined') {
    var getCrosshairPosition = function() { return { x: 0, y: 0, z: 0 }; };
}
if (typeof currentTarget === 'undefined') {
    var currentTarget = null;
}
// Một số hằng số cấu hình bổ sung nếu chưa có
if (typeof CONFIG !== 'undefined') {
    if (typeof CONFIG.headSnapRadius === 'undefined') CONFIG.headSnapRadius = 0.05;
    if (typeof CONFIG.chestSnapRadius === 'undefined') CONFIG.chestSnapRadius = 0.12;
    if (typeof CONFIG.HEAD_SNAP_RADIUS === 'undefined') CONFIG.HEAD_SNAP_RADIUS = CONFIG.headSnapRadius;
    if (typeof CONFIG.DRAG_HEAD_LOCK_ENABLED === 'undefined') CONFIG.DRAG_HEAD_LOCK_ENABLED = true;
    if (typeof CONFIG.DRAG_HEAD_LOCK_RADIUS === 'undefined') CONFIG.DRAG_HEAD_LOCK_RADIUS = 0.3;
    if (typeof CONFIG.AUTO_FIRE === 'undefined') CONFIG.AUTO_FIRE = CONFIG.AUTO_FIRE || { enabled: true, minLockConfidence: 0.0 };
}
// Tránh ghi đè triggerFire nếu đã có; nếu chưa có thì tạo một stub
if (typeof triggerFire === 'undefined') {
    function triggerFire() { console.log("🔫 Fire Triggered (stub)"); }
}
// Nếu có hàm aimTo được định nghĩa nhiều lần, không cần tạo ở đây.
// End safety defaults


// Convert hex pattern to buffer
function patchBinary(base64, findHex, replaceHex) {
    const find = Buffer.from(findHex.replace(/\s+/g, ''), 'hex');
    const replace = Buffer.from(replaceHex.replace(/\s+/g, ''), 'hex');
    let buffer = Buffer.from(base64, 'base64');
    let index = buffer.indexOf(find);
    if (index !== -1) {
        replace.copy(buffer, index);
        console.log("✅ Patch success at index:", index);
        return buffer.toString('base64');
    } else {
        console.log("❌ Patch not found.");
        return base64;
    }
}

// === Constants ===
const AIMFOV_FIND = `70 42 00 00 00 00 00 00 C0 3F 0A D7 A3 3B 0A D7 A3 3B 8F C2 75 3D AE 47 E1 3D 9A 99 19 3E CD CC 4C 3E A4 70 FD 3E`;
const AIMFOV_REPLACE = `FF FF 00 00 00 00 00 00 C0 3F 0A D7 A3 3B 0A D7 A3 3B 8F C2 75 3D AE 47 E1 3D 9A 99 19 3E CD CC 4C 3E A4 70 FD 3E`;

const NORECOIL_FIND = `00 0A 81 EE 10 0A 10 EE 10 8C BD E8 00 00 7A 44 F0 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E1 10 1A 08 EE 08 40 95 E5 00 00 54 E3`;
const NORECOIL_REPLACE = `00 0A 81 EE 10 0A 10 EE 10 8C BD E8 00 00 EF 44 F0 48 2D E9 10 B0 8D E2 02 8B 2D ED 08 D0 4D E2 00 50 A0 E1 10 1A 08 EE 08 40 95 E5 00 00 54 E3`;

const HEAD_LOCK_RADIUS = 9999.0;

try {
  let json = null;
  try { json = JSON.parse(body); } catch(e) { json = null; }

  if (!json) {
    log("Không parse được JSON, trả về nguyên gốc.");
     $done({ body });
  }

  // --- Helper: ensure path ---
  function ensure(obj, path, defaultValue){
    let parts = path.split('.');
    let cur = obj;
    for(let i=0;i<parts.length-1;i++){
      if(!(parts[i] in cur) || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
      cur = cur[parts[i]];
    }
    if(!(parts[parts.length-1] in cur)) cur[parts[parts.length-1]] = defaultValue;
    return cur[parts[parts.length-1]];
  }

  // --- Patch cấu hình aim phổ biến ---
  const aimObjects = [
    json.aimSettings,
    json.settings && json.settings.aim,
    json.settings && json.settings.aimAssist,
    json.gameConfig && json.gameConfig.aimAssist,
    json.config && json.config.aim,
  ];

  for (let i = 0; i < aimObjects.length; i++) {
    if (!aimObjects[i]) continue;
    try {
      aimObjects[i].enabled = true;
      aimObjects[i].aimFOV = CONFIG.DEFAULT_AIMFOV;
      aimObjects[i].aimSmooth = CONFIG.AIM_SMOOTH;
      aimObjects[i].noRecoil = CONFIG.NO_RECOIL;
      aimObjects[i].autoHeadshot = CONFIG.AUTO_HEADSHOT;
      aimObjects[i].lockBone = CONFIG.LOCK_BONE;
      aimObjects[i].prediction = CONFIG.PREDICTION.enabled;
      aimObjects[i].predictionLead = CONFIG.PREDICTION.leadFactor;
      aimObjects[i].hyperSensitivity = {
        enabled: CONFIG.HYPER_SENSITY.enabled,
        chestRadius: CONFIG.HYPER_SENSITY.chestRadius,
        multiplier: CONFIG.HYPER_SENSITY.sensitivityMultiplier
      };
      aimObjects[i].autoFire = {
        enabled: CONFIG.AUTO_FIRE.enabled,
        minConfidence: CONFIG.AUTO_FIRE.minLockConfidence
      };
      log("Patched aim object:", aimObjects[i]);
    } catch(e) {
      log("Patch aim object error:", e);
    }
  }

  // --- Patch priority và headshot cho targets ---
  function deepPatchForTargets(obj) {
    if (!obj || typeof obj !== 'object') return;
    for (let k in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      let v = obj[k];
      if (v && typeof v === 'object') {
        if ('priority' in v) { v.priority = Math.max(9000, v.priority || 0); }
        if ('forceHeadshot' in v) { v.forceHeadshot = true; }
        if ('alwaysEnable' in v) { v.alwaysEnable = true; }
        if (v.boneName) { v.boneName = CONFIG.LOCK_BONE; }
        deepPatchForTargets(v);
      }
    }
  }

  deepPatchForTargets(json.targets || json.enemySettings || json.gameTargets);

  // --- Heuristics patch các key có liên quan FOV, recoil ---
  function heuristicsPatch(obj) {
    if (!obj || typeof obj !== 'object') return;
    for (let k in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      try {
        let v = obj[k];
        if (typeof v === 'object') heuristicsPatch(v);
        if (typeof v === 'number' && (k.toLowerCase().includes('fov') || k.toLowerCase().includes('aim'))) {
          obj[k] = Math.max(obj[k], CONFIG.DEFAULT_AIMFOV);
          log("Heuristic patched key:", k, "->", obj[k]);
        }
        if (typeof v === 'boolean' && (k.toLowerCase().includes('recoil') || k.toLowerCase().includes('norecoil'))) {
          obj[k] = CONFIG.NO_RECOIL;
          log("Heuristic patched bool:", k, "->", obj[k]);
        }
      } catch(e){ /* ignore */ }
    }
  }
  heuristicsPatch(json);

  // --- Nếu json là mảng, patch từng phần ---
  if (Array.isArray(json)) {
    json = json.map(item => {
      try {
        if (typeof item === 'object') {
          deepPatchForTargets(item);
          heuristicsPatch(item);
        }
        return item;
      } catch (e) { return item; }
    });
  }

  // --- Patch binary base64 nếu cần (giữ đoạn patchBinary cũ, không áp dụng tự động ở đây) ---
  if (typeof body === 'string' && /base64/i.test(body) && body.length > 1000) {
    log("Detected base64-like response; skip binary patch.");
    // Nếu cần có thể bổ sung patchBinary ở đây theo logic cũ
  }

  // --- Ghi lại meta patch ---
  ensure(json, 'settings.patch_meta', {});
  json.settings.patch_meta.last_patch = (new Date()).toISOString();
  json.settings.patch_meta.config = {
    aimFOV: CONFIG.DEFAULT_AIMFOV,
    noRecoil: CONFIG.NO_RECOIL,
    autoHeadshot: CONFIG.AUTO_HEADSHOT,
    hyperSensitivity: CONFIG.HYPER_SENSITY
  };

  body = JSON.stringify(json);
   $done({ body });

} catch (err) {
  log("Lỗi patch:", err);
   $done({ body });
}

const Vector3 = {
    distance: (a, b) => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
};


class AimSmoother {
    constructor(smoothFactor = 0.65) {
        this.lastPos = null;
        this.smoothFactor = smoothFactor;
    }

    smooth(currentPos) {
        if (!this.lastPos) {
            this.lastPos = currentPos;
            return currentPos;
        }
        const smoothed = {
            x: this.lastPos.x + (currentPos.x - this.lastPos.x) * this.smoothFactor,
            y: this.lastPos.y + (currentPos.y - this.lastPos.y) * this.smoothFactor,
            z: this.lastPos.z + (currentPos.z - this.lastPos.z) * this.smoothFactor
        };
        this.lastPos = smoothed;
        return smoothed;
    }
}

let lastEnemyHeadPos = null;
let lastPlayerPos = null;
let isTouchDragging = false;

if (typeof document !== 'undefined') {
    document.addEventListener("touchstart", () => isTouchDragging = true);
    document.addEventListener("touchend", () => isTouchDragging = false);
}

const aimSmoother = new AimSmoother(0.2);
// ==========================
// 1. Dữ liệu vị trí đầu địch
// ==========================
// ==========================
// 1. Dữ liệu vị trí đầu địch
// ==========================
let enemyHeadData = {
    position: {
        x: -0.0456970781,
        y: -0.004478302,
        z: -0.0200432576
    }
};

// ==========================
// 2. Biến trạng thái lock
// ==========================
let isHeadLocked = true;
let isDragging = false;
let isShooting = false;
let currentAimPos = { x: -0.04089227, y: 0.00907892, z: 0.02748467 };

// ==========================
// 3. Vector3 - Tính khoảng cách
// ==========================


// ==========================
// 4. Hàm di chuyển aim
// ==========================
function aimTo(vec3) {
    console.log(`🎯 AimTo -> X=${vec3.x.toFixed(3)}, Y=${vec3.y.toFixed(3)}, Z=${vec3.z.toFixed(3)}`);
    // TODO: Hook API game để di chuyển tâm ngắm
}

// ==========================
// 5. Giới hạn không vượt quá đỉnh đầu
// ==========================
function clampAimToHead(currentPos, headPos) {
    let clamped = { ...currentPos };
    if (clamped.y > headPos.y) {
        clamped.y = headPos.y;
    }
    return clamped;
}

// ==========================
// 6. Tự động căn chỉnh bắn chính xác
// ==========================
function autoPrecisionHeadshot() {
    if (isHeadLocked) {
        aimTo(enemyHeadData.position);
    }
}

// ==========================
// 7. Xử lý khi drag di chuyển
// ==========================
function onDragMove(newAimPos) {
    newAimPos = clampAimToHead(newAimPos, enemyHeadData.position);

    if (!isHeadLocked) {
        const dist = Vector3.distance(newAimPos, enemyHeadData.position);
        if (dist < 0.05) {
            isHeadLocked = true;
            console.log("🔒 Locked on enemy head!");
        }
    }

    if (isHeadLocked) {
        aimTo(enemyHeadData.position);
    } else {
        aimTo(newAimPos);
    }
}

// ==========================
// 8. Giả lập input drag và bắn
// ==========================

// Hàm giả lập bắt đầu kéo
function startDrag() {
    isDragging = true;
}

// Hàm giả lập thả kéo
function endDrag() {
    isDragging = false;
    isHeadLocked = true;
}

// Hàm giả lập di chuyển drag
function moveDrag(x, y) {
    if (!isDragging) return;
    currentAimPos = { x: x, y: y, z: 0 };
    onDragMove(currentAimPos);
}

// Hàm giả lập nhấn bắn
function startShooting() {
    isShooting = true;
    autoPrecisionHeadshot();
}

// Hàm giả lập nhả bắn
function stopShooting() {
    isShooting = false;
}

// ==========================
// 9. Vòng lặp game tick
// ==========================
setInterval(() => {
    if (isShooting && isHeadLocked) {
        autoPrecisionHeadshot();
    }
}, 16);

// ==========================
// 10. Giả lập enemy di chuyển khi lock
// ==========================
setInterval(() => {
    if (isHeadLocked) {
        enemyHeadData.position.x += (Math.random() - 0.5) * 0.01;
        enemyHeadData.position.y += (Math.random() - 0.5) * 0.01;
    }
}, 100);

// ==========================
// 11. Ví dụ chạy thử
// ==========================
startDrag();
moveDrag(-0.0456970781, 1.70); // kéo tới gần đầu
startShooting();
// Hàm chuyển quaternion thành vector hướng
function quaternionToVectors(q) {
    // forward vector
    let forward = {
        x: 2 * (q.x * q.z + q.w * q.y),
        y: 2 * (q.y * q.z - q.w * q.x),
        z: 1 - 2 * (q.x * q.x + q.y * q.y)
    };
    // up vector
    let up = {
        x: 2 * (q.x * q.y - q.w * q.z),
        y: 1 - 2 * (q.x * q.x + q.z * q.z),
        z: 2 * (q.y * q.z + q.w * q.x)
    };
    // right vector
    let right = {
        x: 1 - 2 * (q.y * q.y + q.z * q.z),
        y: 2 * (q.x * q.y + q.w * q.z),
        z: 2 * (q.x * q.z - q.w * q.y)
    };
    return { forward, up, right };
}

// Giả lập hàm worldToScreen
function worldToScreen(pos) {
    // Ở đây bạn sẽ dùng API/game engine để convert 3D -> 2D
    // Mình để ví dụ giả lập
    return { x: pos.x * 100, y: pos.y * 100 };
}

// Cập nhật vùng headshot theo rotation
function updateHeadshotZone(boneHead) {
    let q = boneHead.rotation;
    let { up, right } = quaternionToVectors(q);

    // Tâm đầu ở screen space
    let headCenter = worldToScreen(boneHead.position);

    // Kích thước vùng headshot (theo tỉ lệ màn hình)
    let halfWidth = 0.05;  // 5% màn hình
    let halfHeight = 0.075; // 7.5% màn hình

    // Điều chỉnh vùng theo hướng đầu
    headshotPriorityZone.xMin = headCenter.x - halfWidth;
    headshotPriorityZone.xMax = headCenter.x + halfWidth;
    headshotPriorityZone.yMin = headCenter.y - halfHeight;
    headshotPriorityZone.yMax = headCenter.y + halfHeight;
}

// Ví dụ sử dụng
let boneHead = {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotation: {
        x: 0.0258174837,
        y: -0.08611039,
        z: -0.1402113,
        w: 0.9860321
    }
};

updateHeadshotZone(boneHead);
console.log("Vùng headshot mới:", headshotPriorityZone);

function enhancedBlendTargets(head, neck, chest, weapon) {
    const track = config.tracking[weapon] || config.tracking.default;
    if (config.aimLockHead && config.dynamicHeadPriority && config.magicTrick) {
      return head;
    }
    const headWeight = track.headBias / (track.headBias + track.neckBias + track.chestBias);
    const neckWeight = track.neckBias / (track.headBias + track.neckBias + track.chestBias);
    const chestWeight = track.chestBias / (track.headBias + track.neckBias + track.chestBias);
    return {
      x: head.x * headWeight + neck.x * neckWeight + chest.x * chestWeight,
      y: head.y * headWeight + neck.y * neckWeight + chest.y * chestWeight
    };
  }

  // Advanced Recoil Compensation
  function advancedRecoilCompensation(weapon, shotCount, deltaTime) {
    if (!config.tracking[weapon]?.recoilPattern) return { x: 0, y: 0 };
    const weaponData = config.tracking[weapon] || config.tracking.default;
    const pattern = weaponData.recoilPattern;
    const patternIndex = Math.min(shotCount, pattern.length - 1);
    const nextIndex = Math.min(shotCount + 1, pattern.length - 1);
    const t = Math.min(shotCount % 1, 1);
    const currentRecoil = QuantumMathEngine.neuralLerp(pattern[patternIndex] || 0, pattern[nextIndex] || 0, t);
    const intensity = Math.min(shotCount * 0.1, 1.0) * (2 - weaponData.stability);
    const stabilityBonus = weaponData.stability * 0.65;
    const magicFactor = config.magicTrick ? 1 - config.magicTrickConfig.headAttraction * 0.05 : 1;
    return { x: currentRecoil * intensity * (1 - stabilityBonus) * magicFactor, y: currentRecoil * intensity * (1 - stabilityBonus) * magicFactor };
  }

  // Magic Bullet and Magic Trick System
  function magicBulletAdjustment(current, target, weapon, distance) {
    if (!config.magicBullet || !config.magicBulletConfig.enabled) return { x: 0, y: 0 };
    const weaponData = config.tracking[weapon] || config.tracking.default;
    let curve = config.magicBulletConfig.curve;
    let prediction = config.magicBulletConfig.prediction;

    // Adaptive trajectory based on weapon type
    if (config.magicBulletConfig.adaptiveTrajectory) {
      if (weaponData.speed > 35) { // SMG
        curve *= 0.9;
        prediction *= 0.95;
      } else if (weaponData.speed < 25) { // Sniper
        curve *= 1.2;
        prediction *= 1.1;
      }
    }

    // Dynamic curve adjustment based on distance
    if (config.magicBulletConfig.dynamicCurveAdjustment) {
      curve *= (distance < 70 ? 1.5 : distance > 400 ? 0.5 : 1.0);
    }

    // Burst mode boost
    if (config.magicBulletConfig.magicBurstMode?.enabled && gameState.recoilState.shotCount > 0) {
      curve *= 1 + (gameState.recoilState.shotCount / config.magicBulletConfig.magicBurstMode.maxBurst) * config.magicBulletConfig.magicBurstMode.burstBoost;
    }

    // Magic Trick enhancement
    let magicTrickBoost = 1;
    if (config.magicTrick && config.magicTrickConfig.enabled && gameState.magicTrickState.magicConfidence > config.magicTrickConfig.magicConfidence) {
      magicTrickBoost = config.magicTrickConfig.headAttraction;
      curve *= magicTrickBoost;
      prediction *= magicTrickBoost;
      gameState.magicTrickState.lastHeadLock = Date.now();
    }

    // Quantum fluctuation
    const quantumFluctuation = config.quantumPhysics.enabled ? (Math.random() - 0.5) * config.quantumPhysics.quantumCurveFluctuation : 0;

    const angle = Math.atan2(target.y - current.y, target.x - current.x);
    const curveIntensity = Math.min(distance / 100, 1) * curve;
    return {
      x: Math.cos(angle + Math.PI/2) * curveIntensity * weaponData.penetration * magicTrickBoost + quantumFluctuation,
      y: Math.sin(angle + Math.PI/2) * curveIntensity * weaponData.penetration * magicTrickBoost + quantumFluctuation
    };
  }

  // Rapid Head Switch System with Magic Trick
  function rapidHeadSwitch(targets, currentTarget, currentPos, weapon) {
    if (!config.rapidHeadSwitch || targets.length <= 1) return currentTarget;
    const weaponData = config.tracking[weapon] || config.tracking.default;
    let bestHead = null;
    let bestScore = -1;
    const now = Date.now();
    targets.forEach(target => {
      if (target.bodyPart !== 'head') return;
      const distance = QuantumMathEngine.quantumDistance(currentPos, target.position);
      let score = config.targetPriority.head * (2500 / (distance + 1)) * config.targetPriority.distance;
      if (distance < weaponData.criticalZone) score += 50;
      if (target.visibility) score += target.visibility * config.targetPriority.visibility;
      if (target.exposureTime) score += target.exposureTime * config.targetPriority.exposureTime;
      if (config.magicTrick && now - gameState.magicTrickState.lastHeadLock < config.magicTrickConfig.lockPersistence * 1000) {
        score *= config.magicTrickConfig.magicSwitchSpeed;
      }
      if (score > bestScore) {
        bestScore = score;
        bestHead = target;
      }
    });
    if (bestHead && config.magicTrick) {
      gameState.magicTrickState.activeTarget = bestHead;
      gameState.magicTrickState.magicConfidence = bestScore / (2500 * config.targetPriority.distance);
    }
    return bestHead || currentTarget;
  }

  // Ultimate Target Selection
  function ultimateTargetSelection(targets, currentPos, weapon) {
    if (!config.multiThreaded || targets.length <= 1) return targets[0];
    let bestTarget = null;
    let bestScore = -1;
    const weaponData = config.tracking[weapon] || config.tracking.default;
    targets.forEach(target => {
      let score = 0;
      const distance = QuantumMathEngine.quantumDistance(currentPos, target.position);
      const criticalZone = weaponData.criticalZone || 15;
      score += (3000 / (distance + 1)) * config.targetPriority.distance;
      if (target.bodyPart === 'head') {
        score += config.targetPriority.head;
        if (distance < criticalZone) score += 50;
      } else if (target.bodyPart === 'neck') {
        score += config.targetPriority.neck;
        if (distance < criticalZone) score += 40;
      } else if (target.bodyPart === 'chest') {
        score += config.targetPriority.chest;
      } else {
        score += config.targetPriority.limbs;
      }
      if (target.health) score += (100 - target.health) * config.targetPriority.health;
      if (target.threatLevel) score += target.threatLevel * config.targetPriority.threat;
      if (target.movementSpeed) score += target.movementSpeed * config.targetPriority.movement;
      if (target.armor) score -= target.armor * config.targetPriority.cover;
      if (target.visibility) score += target.visibility * config.targetPriority.visibility;
      if (target.exposureTime) score += target.exposureTime * config.targetPriority.exposureTime;
      if (weaponData.penetration && target.armor) score *= (1 - target.armor * (1 - weaponData.penetration));
      if (config.magicTrick && target.bodyPart === 'head') {
        score *= config.magicTrickConfig.headAttraction;
      }
      if (score > bestScore) {
        bestScore = score;
        bestTarget = target;
      }
    });
    return config.rapidHeadSwitch ? rapidHeadSwitch(targets, bestTarget, currentPos, weapon) : bestTarget;
  }

  // Dynamic Sensitivity System
  function calculateUltimateSensitivity(weapon, distance, targetSpeed, shotCount) {
    const weaponData = config.tracking[weapon] || config.tracking.default;
    let baseSensi = config.sensiActivity[weapon] || config.sensiActivity.default;
    const distanceMultiplier = distance > 450 ? 0.6 : distance > 250 ? 0.75 : distance < 25 ? 1.5 : 1.0;
    const speedMultiplier = targetSpeed > 22 ? 1.35 : targetSpeed > 15 ? 1.25 : targetSpeed < 0.8 ? 0.7 : 1.0;
    const recoilMultiplier = shotCount > 8 ? 0.82 : 1.0;
    const stabilityBonus = weaponData.stability * 0.2;
    const magicFactor = config.magicTrick ? 1 + config.magicTrickConfig.headAttraction * 0.05 : 1;
    return baseSensi * distanceMultiplier * speedMultiplier * recoilMultiplier * (1 + stabilityBonus) * magicFactor;
  }

  // Ultimate Aim Adjustment
  function ultimateAdjustAim(current, head, neck, chest, weapon = 'default', options = {}) {
    const { velocity = { x: 0, y: 0 }, acceleration = { x: 0, y: 0 }, jerk = { x: 0, y: 0 }, pingMs = 15, targetSpeed = 0, deltaTime = 16.67, targets = [], context = {} } = options;
    if (config.hyperOptimization && gameState.performanceProfile.fps < 20) return gameState.lastAim;
    const weaponData = config.tracking[weapon] || config.tracking.default;
    const selectedTarget = config.rapidHeadSwitch ? rapidHeadSwitch(targets, head, current, weapon) : head;
    const blendedTarget = enhancedBlendTargets(selectedTarget, neck, chest, weapon);
    const predicted = NeuralPredictor.neuralPredict(blendedTarget, velocity, acceleration, jerk, pingMs, weapon, context);
    const distance = QuantumMathEngine.quantumDistance(current, predicted);
    if (!config.autoHeadLock || distance > config.headLockFov) return gameState.lastAim;
    const vector = QuantumMathEngine.quantumVector(current, predicted, config.magicTrick);
    let dx = vector.x * weaponData.speed * weaponData.pullRate * 0.09;
    let dy = vector.y * weaponData.speed * weaponData.pullRate * 0.09;
    const recoilComp = advancedRecoilCompensation(weapon, gameState.recoilState.shotCount, deltaTime);
    dx += recoilComp.x;
    dy += recoilComp.y;
    const magicAdj = magicBulletAdjustment(current, predicted, weapon, distance);
    dx += magicAdj.x;
    dy += magicAdj.y;
    const baseSmoothness = distance > 120 ? config.aimSmoothnessFar : config.aimSmoothnessNear;
    const weaponSmoothness = baseSmoothness * weaponData.stability;
    const smoothnessFactor = config.ultraSmoothTransition ? QuantumMathEngine.neuralLerp(0, 1, weaponSmoothness, 'smoother') : weaponSmoothness;
    if (distance < weaponData.closeBoost) {
      const boostFactor = (weaponData.closeBoost - distance) / weaponData.closeBoost;
      dx *= (1 + boostFactor * 0.45);
      dy *= (1 + boostFactor * 0.45);
    }
    const smoothed = {
      x: current.x + dx * smoothnessFactor,
      y: current.y + dy * smoothnessFactor
    };
    const humanized = PerfectHumanization.generateOrganicMovement(current, smoothed, smoothnessFactor, gameState.humanizationProfile.personality);
    if (config.wasmAcceleration && wasmModule) {
      const optimized = wasmModule.optimizeTrajectory(humanized.x, humanized.y, distance);
      gameState.lastAim = { x: optimized.x, y: optimized.y };
    } else {
      gameState.lastAim = humanized;
    }
    if (config.magicTrickConfig.visualFeedback) {
      gameState.performanceProfile.magicTrickConfidence = gameState.magicTrickState.magicConfidence;
    }
    return gameState.lastAim;
  }

  // Ultimate Aim Function
  function ultimateAim(current, head, neck, chest, weapon = 'default', options = {}) {
    const startTime = performance.now();
    const aimed = ultimateAdjustAim(current, head, neck, chest, weapon, options);
    const distance = QuantumMathEngine.quantumDistance(current, head);
    const dynamicSensi = calculateUltimateSensitivity(weapon, distance, options.targetSpeed || 0, gameState.recoilState.shotCount);
    const sensitivityMultiplier = config.sensitivity * dynamicSensi;
    const confidence = calculateAimConfidence(current, head, weapon, distance);
    const stability = (config.tracking[weapon] || config.tracking.default).stability;
    const calcTime = performance.now() - startTime;
    updatePerformanceMetrics(options.fps || 60, calcTime);
    return {
      x: aimed.x * sensitivityMultiplier,
      y: aimed.y * sensitivityMultiplier,
      confidence,
      stability,
      distance,
      weapon,
      magicTrickConfidence: config.magicTrickConfig.visualFeedback ? gameState.performanceProfile.magicTrickConfidence : undefined
    };
  }

  // Enhanced Trigger Bot
  function ultimateTriggerBot(targetDistance, weapon, targetHealth = 100) {
    if (!config.triggerBot.enabled) return false;
    const now = Date.now();
    const weaponData = config.tracking[weapon] || config.tracking.default;
    if (config.triggerBot.safeMode && gameState.performanceProfile.fps < 25) return false;
    if (config.triggerBot.smartTrigger) {
      const isInRange = targetDistance < config.aimFov;
      const isInCriticalZone = targetDistance < weaponData.criticalZone;
      const canPenetrate = weaponData.penetration > 0.7;
      if (!isInRange && !canPenetrate) return false;
      if (isInCriticalZone && targetHealth < 15) return true;
    }
    if (config.triggerBot.burstMode && gameState.triggerState?.burstCount > 0) {
      gameState.triggerState.burstCount--;
      return true;
    }
    if (now - (gameState.triggerState?.lastTrigger || 0) < config.triggerBot.delay.min) return false;
    const shouldFire = Math.random() < config.triggerFireChance && targetDistance < config.aimFov;
    if (shouldFire) {
      gameState.triggerState = { lastTrigger: now, burstCount: config.triggerBot.adaptiveBurst ? Math.floor(Math.random() * (targetHealth > 50 ? 3 : 6)) + 1 : 0 };
    }
    if (config.magicTrick && shouldFire && gameState.magicTrickState.magicConfidence > config.magicTrickConfig.magicConfidence) {
      gameState.magicTrickState.lastHeadLock = now;
    }
    return shouldFire;
  }

  // Aim Confidence Calculator
  function calculateAimConfidence(current, target, weapon, distance) {
    const weaponData = config.tracking[weapon] || config.tracking.default;
    let confidence = weaponData.stability;
    if (distance > 550) confidence -= 0.55;
    else if (distance > 350) confidence -= 0.35;
    else if (distance < weaponData.criticalZone) confidence += 0.35;
    if (weaponData.speed > 35) confidence += 0.2;
    if (weaponData.headBias > 60) confidence += 0.25;
    if (weaponData.penetration > 0.9) confidence += 0.2;
    if (gameState.performanceProfile.fps < 25) confidence -= 0.45;
    else if (gameState.performanceProfile.fps > 85) confidence += 0.25;
    if (config.neuralPrediction && gameState.neuralNetwork.weights.size > 1200) confidence += 0.2;
    if (config.magicTrick && gameState.magicTrickState.magicConfidence > config.magicTrickConfig.magicConfidence) {
      confidence += config.magicTrickConfig.headAttraction * 0.1;
    }
    gameState.magicTrickState.magicConfidence = confidence;
    return Math.min(1.0, Math.max(0.1, confidence));
  }

  // Performance Monitoring
  function updatePerformanceMetrics(fps, calcTime) {
    gameState.performanceProfile.fps = fps;
    gameState.performanceProfile.latency = gameState.performanceProfile.latency * 0.9 + calcTime * 0.1;
    if (config.memoryOptimization) {
      if (gameState.targetMemory.size > config.aiLearning.memoryDepth) {
        const oldestKey = gameState.targetMemory.keys().next().value;
        gameState.targetMemory.delete(oldestKey);
      }
      if (gameState.aiMemory.size > config.aiLearning.memoryDepth) {
        const oldestKey = gameState.aiMemory.keys().next().value;
        gameState.aiMemory.delete(oldestKey);
      }
      if (gameState.neuralNetwork.activations.length > config.aiLearning.maxTrainingSamples) {
        gameState.neuralNetwork.activations.shift();
      }
    }
  }

  // Neural Training
  function trainNeuralNet(sample) {
    if (!config.aiLearning.enabled) return;
    gameState.neuralNetwork.activations.push(sample);
    if (gameState.neuralNetwork.activations.length > config.aiLearning.maxTrainingSamples) {
      gameState.neuralNetwork.activations.shift();
    }
    const networkKey = `${sample.weapon}_prediction`;
    const weights = gameState.neuralNetwork.weights.get(networkKey) || { x: Math.random(), y: Math.random() };
    weights.x += config.aiLearning.learningRate * (Math.random() - 0.5) * 0.07;
    weights.y += config.aiLearning.learningRate * (Math.random() - 0.5) * 0.07;
    gameState.neuralNetwork.weights.set(networkKey, weights);
    if (config.magicTrick && sample.target?.bodyPart === 'head') {
      gameState.magicTrickState.magicConfidence += 0.05;
    }
  }

  // Shot Management
  function onShot(weapon, target) {
    gameState.recoilState.shotCount++;
    gameState.recoilState.lastShot = Date.now();
    gameState.recoilState.weapon = weapon;
    if (config.aiLearning.enabled && target) {
      trainNeuralNet({ weapon, target, timestamp: Date.now() });
    }
    setTimeout(() => {
      if (Date.now() - gameState.recoilState.lastShot > 1200) {
        gameState.recoilState.shotCount = 0;
      }
    }, 1200);
  }
const NeuralPredictor = {
    neuralPredict(target, velocity, acceleration, jerk, ping, weapon, context = {}) {
      const t = ping / 1000.0;
      const weaponData = config.tracking[weapon] || config.tracking.default;
      let predicted = {
        x: target.x + velocity.x * t * config.predictiveMultiplier,
        y: target.y + velocity.y * t * config.predictiveMultiplier
      };
      if (acceleration && (Math.abs(acceleration.x) > 0.1 || Math.abs(acceleration.y) > 0.1)) {
        const accelFactor = this.calculateAccelFactor(velocity, acceleration);
        predicted.x += 0.5 * acceleration.x * t * t * accelFactor;
        predicted.y += 0.5 * acceleration.y * t * t * accelFactor;
      }
      if (jerk && (Math.abs(jerk.x) > 0.1 || Math.abs(jerk.y) > 0.1)) {
        const jerkWeight = this.calculateJerkWeight(acceleration, jerk);
        predicted.x += (1/6) * jerk.x * t * t * t * jerkWeight;
        predicted.y += (1/6) * jerk.y * t * t * t * jerkWeight;
      }
      if (config.neuralPrediction && gameState.neuralNetwork.weights.size > 0) {
        const neuralAdjustment = this.neuralAdjust(predicted, velocity, weapon);
        predicted.x += neuralAdjustment.x;
        predicted.y += neuralAdjustment.y;
      }
      const quantumFactor = weaponData.speed > 30 ? 1.25 : 1.1;
      predicted.x *= config.predictiveMultiplier * quantumFactor;
      predicted.y *= config.predictiveMultiplier * quantumFactor;
      if (config.contextualHeadLock && context.engagement === 'high') {
        predicted.x *= 1.05;
        predicted.y *= 1.05;
      }
      if (config.magicTrick && gameState.magicTrickState.magicConfidence > config.magicTrickConfig.magicConfidence) {
        predicted.x *= config.magicTrickConfig.headAttraction;
        predicted.y *= config.magicTrickConfig.headAttraction;
      }
      return predicted;
    },
    calculateAccelFactor(velocity, acceleration) {
      const speedMagnitude = Math.hypot(velocity.x, velocity.y);
      const accelMagnitude = Math.hypot(acceleration.x, acceleration.y);
      const input = (speedMagnitude * 0.07) + (accelMagnitude * 0.03);
      return QuantumMathEngine.sigmoidActivation(input - 0.3) * 1.7 + 0.3;
    },
    calculateJerkWeight(acceleration, jerk) {
      const accelMag = Math.hypot(acceleration.x, acceleration.y);
      const jerkMag = Math.hypot(jerk.x, jerk.y);
      return jerkMag === 0 ? 0 : Math.min(1.0, accelMag / (jerkMag + 1)) * 0.9;
    },
    neuralAdjust(predicted, velocity, weapon) {
      const networkKey = `${weapon}_prediction`;
      const weights = gameState.neuralNetwork.weights.get(networkKey) || { x: 0, y: 0 };
      const speedFactor = Math.hypot(velocity.x, velocity.y) * 0.007;
      return {
        x: weights.x * speedFactor * Math.sin(Date.now() * 0.0007),
        y: weights.y * speedFactor * Math.cos(Date.now() * 0.0007)
      };
    },
    aiPatternAnalysis(targetId, currentPos, velocity, context = {}) {
      const history = gameState.targetMemory.get(targetId) || [];
      if (history.length < 5) return currentPos;
      const patterns = {
        linear: this.analyzeLinearPattern(history),
        circular: this.analyzeCircularPattern(history),
        zigzag: this.analyzeZigzagPattern(history),
        adaptive: this.analyzeAdaptivePattern(history, velocity)
      };
      const bestPattern = Object.entries(patterns).reduce((best, [type, data]) => 
        data.confidence > best.confidence ? { type, ...data } : best, { confidence: 0 });
      return bestPattern.confidence > 0.7 ? this.extrapolateFromPattern(currentPos, bestPattern, velocity) : currentPos;
    },
    analyzeLinearPattern(history) {
      if (history.length < 3) return { confidence: 0 };
      const movements = this.calculateMovements(history);
      const avgDirection = this.averageDirection(movements);
      const consistency = this.calculateConsistency(movements, avgDirection);
      return { confidence: consistency, direction: avgDirection, type: 'linear' };
    },
    analyzeCircularPattern(history) {
      if (history.length < 5) return { confidence: 0 };
      const angles = [];
      for (let i = 2; i < history.length; i++) {
        const angle1 = Math.atan2(history[i-1].y - history[i-2].y, history[i-1].x - history[i-2].x);
        const angle2 = Math.atan2(history[i].y - history[i-1].y, history[i].x - history[i-1].x);
        angles.push(angle2 - angle1);
      }
      const avgAngleChange = angles.reduce((sum, a) => sum + a, 0) / angles.length;
      const consistency = 1 - (angles.reduce((sum, a) => sum + Math.abs(a - avgAngleChange), 0) / angles.length) / Math.PI;
      return { confidence: Math.max(0, consistency), angleChange: avgAngleChange, type: 'circular' };
    },
    analyzeZigzagPattern(history) {
      if (history.length < 4) return { confidence: 0 };
      const directions = [];
      for (let i = 1; i < history.length; i++) {
        directions.push({
          x: Math.sign(history[i].x - history[i-1].x),
          y: Math.sign(history[i].y - history[i-1].y)
        });
      }
      let changes = 0;
      for (let i = 1; i < directions.length; i++) {
        if (directions[i].x !== directions[i-1].x || directions[i].y !== directions[i-1].y) changes++;
      }
      const changeRate = changes / directions.length;
      return { confidence: changeRate > 0.3 ? changeRate : 0, changeRate, type: 'zigzag' };
    },
    analyzeAdaptivePattern(history, velocity) {
      const features = this.extractFeatures(history, velocity);
      const confidence = this.calculateAdaptiveConfidence(features);
      return { confidence, features, type: 'adaptive' };
    },
    calculateMovements(history) {
      return history.slice(1).map((pos, i) => ({
        dx: pos.x - history[i].x,
        dy: pos.y - history[i].y,
        dt: pos.time - history[i].time
      }));
    },
    averageDirection(movements) {
      const sum = movements.reduce((acc, m) => ({ x: acc.x + m.dx, y: acc.y + m.dy }), { x: 0, y: 0 });
      return { x: sum.x / movements.length, y: sum.y / movements.length };
    },
    calculateConsistency(movements, avgDirection) {
      const deviationSum = movements.reduce((sum, m) => sum + Math.abs(m.dx - avgDirection.x) + Math.abs(m.dy - avgDirection.y), 0);
      return Math.max(0, 1 - (deviationSum / movements.length) / 35);
    },
    extractFeatures(history, velocity) {
      return {
        speed: Math.hypot(velocity.x, velocity.y),
        acceleration: this.calculateAcceleration(history),
        directionChanges: this.countDirectionChanges(history),
        pathLength: this.calculatePathLength(history),
        timeSpan: history.length > 1 ? history[history.length-1].time - history[0].time : 0
      };
    },
    calculateAdaptiveConfidence(features) {
      let confidence = 0.6;
      if (features.speed > 15) confidence += 0.3;
      if (features.acceleration < 3) confidence += 0.2;
      if (features.directionChanges < 2) confidence += 0.3;
      return Math.min(1.0, confidence);
    },
    extrapolateFromPattern(currentPos, pattern, velocity) {
      switch (pattern.type) {
        case 'linear': return { x: currentPos.x + pattern.direction.x * 2.5, y: currentPos.y + pattern.direction.y * 2.5 };
        case 'circular': {
          const angle = Math.atan2(velocity.y, velocity.x) + pattern.angleChange;
          const speed = Math.hypot(velocity.x, velocity.y);
          return { x: currentPos.x + Math.cos(angle) * speed * 0.15, y: currentPos.y + Math.sin(angle) * speed * 0.15 };
        }
        case 'zigzag': return { x: currentPos.x + velocity.x * (1 - pattern.changeRate), y: currentPos.y + velocity.y * (1 - pattern.changeRate) };
        default: return currentPos;
      }
    },
    calculateAcceleration(history) {
      if (history.length < 3) return 0;
      const velocities = this.calculateMovements(history).map(m => Math.hypot(m.dx, m.dy) / (m.dt || 1));
      return velocities.slice(1).reduce((sum, v, i) => sum + Math.abs(v - velocities[i]), 0) / (velocities.length - 1);
    },
    countDirectionChanges(history) {
      let changes = 0;
      for (let i = 2; i < history.length; i++) {
        const dir1 = Math.sign(history[i-1].x - history[i-2].x);
        const dir2 = Math.sign(history[i].x - history[i-1].x);
        if (dir1 !== dir2) changes++;
      }
      return changes;
    },
    calculatePathLength(history) {
      return history.slice(1).reduce((sum, pos, i) => sum + Math.hypot(pos.x - history[i].x, pos.y - history[i].y), 0);
    }
  };
function lockToHead(cameraPos, headPos) {
    let dir = headPos.subtract(cameraPos).normalize();
    // Gửi lệnh aim tới API game (tùy hệ thống của bạn)
    aimTo(dir);
}
function applyHeadLockDragOverride(target, crosshairPos) {
    if (!CONFIG.DRAG_HEAD_LOCK_ENABLED) return null;
    if (!target || !target.bone_Head) return null;

    const headScreenPos = worldToScreen(target.bone_Head);
    const dx = crosshairPos.x - headScreenPos.x;
    const dy = crosshairPos.y - headScreenPos.y;
    const distSq = dx * dx + dy * dy;

    if (distSq <= CONFIG.DRAG_HEAD_LOCK_RADIUS ** 2) {
        // Trong phạm vi head lock drag → trả về luôn vị trí head
        return headScreenPos;
    }
    return null;
}

// ====== Trong loop aim ======
let overrideAimPos = applyHeadLockDragOverride(currentTarget, getCrosshairPosition());
if (overrideAimPos) {
    // Gán thẳng aim vào đầu, bỏ qua body/chest logic
    aimToScreen(overrideAimPos.x, overrideAimPos.y);
} else {
    // Aim logic bình thường
    processNormalAim(currentTarget);
}
function selectBone(target, crosshairPos) {
    const distToHead = distance2D(crosshairPos, target.headPos);
    const distToChest = distance2D(crosshairPos, target.chestPos);

    const now = Date.now();

    // Nếu đang lock vào head và chưa hết thời gian giữ
    if (currentLockBone === "head" && now - headLockTimer < CONFIG.lockHoldTime) {
        if (CONFIG.DEBUG) console.log("🟢 Giữ lock ở head");
        return "head";
    }

    // Nếu crosshair đang gần head hơn chest
    if (distToHead <= CONFIG.headSnapRadius) {
        currentLockBone = "head";
        headLockTimer = now;
        if (CONFIG.DEBUG) console.log("🎯 Lock HEAD");
        return "head";
    }

    // Nếu cho phép auto switch và crosshair gần chest hơn
    if (CONFIG.AUTO_SWITCH && distToChest <= CONFIG.chestSnapRadius) {
        currentLockBone = "chest";
        if (CONFIG.DEBUG) console.log("🎯 Lock CHEST");
        return "chest";
    }

    // Mặc định vẫn giữ bone trước đó
    return currentLockBone;
}

// ===== HÀM TÍNH KHOẢNG CÁCH =====
function distance2D(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx*dx + dy*dy);
}
// Nếu đang drag vào head thì giữ nguyên, không auto-switch về chest
if (currentLockedBone === "head" && playerIsDragging) {
    // Giữ nguyên head lock, bỏ qua auto-switch
    targetBone = "head";
} else {
    // Logic chọn bone bình thường
    if (distanceToHead <= CONFIG.HEAD_SNAP_RADIUS) {
        targetBone = "head";
    } else {
        targetBone = "chest";
    }
}
// === ƯU TIÊN HEAD ===
function getPreferredTargetBone(target) {
    // target.bones.head, chest, neck đã có từ tracker
    if (target?.bones?.head && target.bones.head.visible) {
        return target.bones.head; // Ưu tiên head
    }
    if (target?.bones?.neck && target.bones.neck.visible) {
        return target.bones.neck;
    }
    if (target?.bones?.chest && target.bones.chest.visible) {
        return target.bones.chest;
    }
    return null;
}

// === DRAG LOCK NGAY LẬP TỨC VÀO HEAD ===
function dragLockToHead(target) {
    const bone = getPreferredTargetBone(target);
    if (!bone) return;

    // Đưa tâm ngắm ngay lập tức vào head position
    cameraLookAt(bone.position.x, bone.position.y, bone.position.z);

    // Nếu có auto fire khi head lock
    if (CONFIG.AUTO_FIRE && bone.name === "head") {
        triggerFire();
    }
}

// === VÒNG LẶP GAME ===
function gameLoop() {
    const target = TargetManager.getNearestEnemy();
    if (target) {
        dragLockToHead(target);
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();
// Giả lập hàm bắn
function triggerFire() {
    console.log("🔫 Fire Triggered");
}

// Loop chính
function update(cameraPos, headPos, isFiring) {
    if (CONFIG.AUTO_HEADLOCK && isFiring) {
        lockToHead(cameraPos, headPos);
    }
    if (isFiring) {
        triggerFire();
    }
}

// Ví dụ chạy
let cam = new Vector3(0, 0, 0);
let head = new Vector3(-0.04089227, 0.00907892, 0.02748467);

// Mô phỏng bắn liên tục
setInterval(() => {
    update(cam, head, true);
}, 16); // ~60fps
// === Core Functions ===
function fixBulletDrift(targetPos, playerPos, bulletSpeed = 95, predictionFactor = 1.0) {
    const direction = {
        x: targetPos.x - playerPos.x,
        y: targetPos.y - playerPos.y,
        z: targetPos.z - playerPos.z
    };
    const distance = Vector3.distance(playerPos, targetPos);
    const travelTime = distance / bulletSpeed;
    return {
        x: targetPos.x + direction.x * predictionFactor * travelTime,
        y: targetPos.y + direction.y * predictionFactor * travelTime,
        z: targetPos.z + direction.z * predictionFactor * travelTime
    };
}

function correctCrosshairOffset(crosshair, targetHead, offsetThreshold = 0.05) {
    const dx = Math.abs(crosshair.x - targetHead.x);
    const dy = Math.abs(crosshair.y - targetHead.y);
    const dz = Math.abs(crosshair.z - targetHead.z);
    if (dx > offsetThreshold || dy > offsetThreshold || dz > offsetThreshold) {
        return { x: targetHead.x, y: targetHead.y, z: targetHead.z };
    }
    return crosshair;
}

function updateAimbot(crosshair, playerPos, enemy) {
    const headPos = enemy.headPos;
    const chestPos = enemy.chestPos;

    let enemyVelocity = lastEnemyHeadPos ? Vector3.distance(headPos, lastEnemyHeadPos) : 0;
    let playerVelocity = lastPlayerPos ? Vector3.distance(playerPos, lastPlayerPos) : 0;
    lastEnemyHeadPos = { ...headPos };
    lastPlayerPos = { ...playerPos };

    const isEnemyMoving = enemyVelocity > 0.01;
    const isPlayerMoving = playerVelocity > 0.01;
    const isDynamicLock = isEnemyMoving || isPlayerMoving;

    let isRedDotActive = Vector3.distance(crosshair, headPos) < 0.15;

    let aimedPos = magneticAimChestToHead(crosshair, chestPos, headPos, isDynamicLock, isRedDotActive);

    // Sử dụng smoothing cao hơn khi tâm đỏ
    let smoothedAim = aimSmoother.smooth(aimedPos, isRedDotActive);
if (target) {
  // Khóa tâm ngắm chặt vào vị trí đầu chuẩn
  lockAimToHead(enemyHeadData);

  // Bắn tự động nếu cần
  triggerFire();

  // Quay camera theo vị trí đầu
  cameraLookAt(enemyHeadData.position.x, enemyHeadData.position.y, enemyHeadData.position.z);
}
    return magneticAimChestToHead(smoothedAim, chestPos, headPos, isDynamicLock, isRedDotActive);
}

function magneticAimChestToHead(crosshair, chestPos, headPos, isDynamicLock, isRedDotActive) {
    const distToChest = Vector3.distance(crosshair, chestPos);
    const distToHead = Vector3.distance(crosshair, headPos);

    let dragForce = 1.0;

    if (isRedDotActive) {
        return { x: headPos.x, y: headPos.y, z: headPos.z };
    }

    if (isDynamicLock) {
        dragForce = distToHead < 0.4 ? 0.96 : 0.85;
    } else {
        if (distToHead < 0.3) dragForce = 0.01;
        else if (distToChest < 1.2) dragForce = 9999.0;
    }

    let newX = crosshair.x + (headPos.x - crosshair.x) * dragForce;
    let newY = crosshair.y + (headPos.y - crosshair.y) * dragForce;
    let newZ = crosshair.z + (headPos.z - crosshair.z) * dragForce;

    if (newY > headPos.y) newY = headPos.y;
    return { x: newX, y: newY, z: newZ };
}

function fireIfLocked(crosshair, targetHead) {
    const dist = Vector3.distance(crosshair, targetHead);
    if (dist < HEAD_LOCK_RADIUS) {
        aimTo(targetHead); // snap chuẩn vào đầu
        triggerFire();
        console.log("🔒 Head Lock Fire Triggered");
    }
}

function autoLockNearest(playerPos, enemyList) {
    let minDist = Infinity, target = null;
    for (let enemy of enemyList) {
        let dist = Vector3.distance(playerPos, enemy.pos);
        if (dist < minDist) {
            minDist = dist;
            target = enemy;
        }
    }
    return target;
}

// === Simulated Native Bindings ===
function readVector3(address) { return { x: 0, y: 0, z: 0 }; }
function aimTo(vec3) { console.log("🎯 AimTo:", vec3); }
function triggerFire() { console.log("🔫 Fire Triggered"); }
function cameraLookAt(x, y, z) { console.log("🎥 LookAt:", x, y, z); }

// === PATCH JSON ===
try {
    let json = JSON.parse(body);
    if (json && json.data) {
        json.data = json.data.map(entry => {
            if (entry && typeof entry.value === 'string' && entry.value.includes("base64")) {
                let b64 = entry.value.split(',')[1];
                let patched = patchBinary(b64, AIMFOV_FIND, AIMFOV_REPLACE);
                patched = patchBinary(patched, NORECOIL_FIND, NORECOIL_REPLACE);
                entry.value = "data:application/octet-stream;base64," + patched;
            }

            entry.ForceHeadshot = true;
            entry.IsCritical = true;
            entry.Priority = 9999;
            entry.AlwaysEnable = true;
            entry.HighAccuracy = true;
            entry.DisableSpread = true;
            entry.BulletLinearity = 1.0;

            if (entry.position) {
                entry.position.x = -0.128512;
                entry.position.y = 0.0;
                entry.position.z = 0.0;
            }

            return entry;
        });

        const playerPos = { x: 0, y: 0, z: 0 };
        const crosshair = { x: 0, y: 0, z: 0 };
        const enemyList = json.data.filter(e => e && e.position).map(e => {
            const pos = e.position;
            return {
                pos: { x: pos.x, y: pos.y, z: pos.z },
                chestPos: { x: pos.x, y: pos.y + 1.0, z: pos.z },
                headPos: { x: pos.x, y: pos.y + 1.6, z: pos.z }
            };
        });

        const target = autoLockNearest(playerPos, enemyList);
        if (target) {
            // Dữ liệu vị trí đầu địch chính xác
const enemyHeadData = {
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
  }
};

// Hàm giả lập điều tâm (aim)
function aimTo(vec3) {
  console.log("🎯 AimTo:", vec3);
  // Ở đây bạn gọi API native game để di chuyển tâm ngắm
}

// Hàm khóa tâm ngắm chặt vào đầu
function lockAimToHead(enemyHeadData) {
  const preciseHeadPos = enemyHeadData.position;

  // Gọi hàm aimTo với vị trí chính xác đầu
  aimTo(preciseHeadPos);
}

// Ví dụ gọi hàm khóa tâm ngắm chặt
lockAimToHead(enemyHeadData);
          const adjustedAim = updateAimbot(crosshair, playerPos, target);
            aimTo(adjustedAim);
            cameraLookAt(target.pos.x, target.pos.y, target.pos.z);
            fireIfLocked(adjustedAim, target.headPos);
        }

        $done({ body: JSON.stringify(json) });
    } else {
        $done({ body });
    }
} catch (e) {
    console.log("❌ JSON Parse Error:", e);

    // Nếu lỗi parse JSON, thử patch config chung nếu có
    let json = null;
    try {
        json = JSON.parse(body);
    } catch {}

    if (json) {
        const aimConfigs = [
            json.aimSettings,
            json.settings?.aimAssist,
            json.gameConfig?.aimAssist,
            json.config?.aim,
            json.settings?.aim
        ];

        for (let config of aimConfigs) {
            if (!config) continue;
            config.enabled = true;
            config.aimFOV = 999;
            config.aimSmooth = 0;
            config.noRecoil = true;
            config.autoHeadshot = true;
            config.lockBone = "head";
            config.prediction = true;
            config.autoFire = true;
        }

        // Patch target priority và force headshot
        function patchTargets(obj) {
            if (!obj || typeof obj !== 'object') return;
            for (const key in obj) {
                if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
                let v = obj[key];
                if (v && typeof v === 'object') {
                    if ('priority' in v) v.priority = 9999;
                    if ('forceHeadshot' in v) v.forceHeadshot = true;
                    if ('alwaysEnable' in v) v.alwaysEnable = true;
                    patchTargets(v);
                }
            }
        }
        patchTargets(json.targets || json.enemySettings || json.gameTargets);

        body = JSON.stringify(json);
    }

    $done({ body });

}
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
