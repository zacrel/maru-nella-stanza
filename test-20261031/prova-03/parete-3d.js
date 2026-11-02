import * as T from 'three';
// Projective extension of the measured wall. The wall mapping is preserved;
// depth uses an assumed focal length, not a verified camera calibration.
export function wallCamera(){
 const W=1600,H=1067,f=1200,cx=W/2,cy=H/2;
 const a=new T.Vector3(165.4417252,44.4325391,.1019584279),b=new T.Vector3(-26.8490963,-163.6420148,-.0432732095),t=new T.Vector3(578.5089027,656.2746875,1);
 const inv=v=>new T.Vector3((v.x-cx*v.z)/f,(v.y-cy*v.z)/f,v.z);
 const ra=inv(a),rb=inv(b),normal=new T.Vector3().crossVectors(ra,rb).normalize().multiplyScalar(Math.sqrt(ra.length()*rb.length()));
 const d=new T.Vector3(f*normal.x+cx*normal.z,f*normal.y+cy*normal.z,normal.z);
 const row=(v)=>[2*v.x/W-v.z,v.z-2*v.y/H,v.z];
 const A=row(a),B=row(b),D=row(d),C=row(t),near=.01,far=100,q=(far+near)/(far-near),r=-2*far*near/(far-near);
 const camera=new T.PerspectiveCamera();camera.matrixWorld.identity();camera.matrixWorldInverse.identity();
 camera.projectionMatrix.set(A[0],B[0],D[0],C[0],A[1],B[1],D[1],C[1],q*A[2],q*B[2],q*D[2],q*C[2]+r,A[2],B[2],D[2],C[2]);
 camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();return camera;
}
export function placeOnWall(l){
 if(!l.wallAttached){l.wallAttached=true;l.camera=wallCamera();l.wallX=-1.65;l.model.rotation.set(0,0,0);l.model.updateMatrixWorld(true);const box=new T.Box3().setFromObject(l.model);l.wallBounds={minY:box.min.y,minZ:box.min.z,maxZ:box.max.z};}
 // Keep the base on y=0 and the rear just in front of z=0 (wall).
 l.cfg.rotation=0;l.model.rotation.set(0,0,0);l.group.position.set(l.wallX,-l.wallBounds.minY,-l.wallBounds.minZ+.015);
 l.light.position.copy(l.group.position).add(new T.Vector3(-3,5,4));l.light.target.position.copy(l.group.position);l.renderer.render(l.scene,l.camera);
}
