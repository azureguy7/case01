# Vercel 배포 가이드

이 프로젝트를 Vercel에 배포하는 방법입니다.

## 방법 1: Vercel 웹사이트에서 배포 (추천)

### 1단계: GitHub에 푸시

```bash
# GitHub에 새 리포지토리를 만든 후:
git remote add origin https://github.com/YOUR_USERNAME/coffee-shop.git
git branch -M main
git push -u origin main
```

### 2단계: Vercel에서 Import

1. [Vercel](https://vercel.com)에 로그인
2. "Add New Project" 클릭
3. GitHub 리포지토리 import
4. 프로젝트 선택: `coffee-shop-react`
5. 설정:
   - **Framework Preset**: Vite
   - **Root Directory**: `coffee-shop-react`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. "Deploy" 클릭

## 방법 2: Vercel CLI 사용

PowerShell 관리자 권한으로 실행:

```powershell
# PowerShell 실행 정책 변경 (관리자 권한 필요)
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# Vercel CLI 설치
npm install -g vercel

# coffee-shop-react 폴더로 이동
cd coffee-shop-react

# Vercel 로그인
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 방법 3: npx 사용 (설치 없이)

```bash
cd coffee-shop-react
npx vercel
```

첫 배포 시 질문들:
- Set up and deploy? **Y**
- Which scope? (계정 선택)
- Link to existing project? **N**
- What's your project's name? **coffee-shop-react**
- In which directory is your code located? **./**
- Want to override the settings? **N**

## 자동 배포 설정

vercel.json이 이미 설정되어 있어서 빌드 설정이 자동으로 적용됩니다.

## 배포 후

배포가 완료되면 Vercel이 다음을 제공합니다:
- **Production URL**: `https://coffee-shop-react.vercel.app` (또는 유사한 URL)
- **Preview URL**: Git 브랜치마다 자동 생성
- **자동 HTTPS**: SSL 인증서 자동 적용

## 문제 해결

### 빌드 에러가 발생하면:
```bash
cd coffee-shop-react
npm install
npm run build
```
로컬에서 먼저 테스트하세요.

### Images 경로 문제:
모든 이미지가 `public/images/` 폴더에 있어야 합니다. ✅ (이미 완료됨)

---

**현재 상태**: 프로젝트가 Vercel 배포 준비 완료! 위의 방법 중 하나를 선택하여 배포하세요.
